import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, take, throwError } from 'rxjs';

import { InMemoryDb } from '@codesign/shared/classes';
import { randomizeDelay } from '@codesign/shared/helpers';
import { IUserDto } from '@codesign/shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class UsersRestService {
    private _data = new InMemoryDb<IUserDto>([
        {
            id: '0',
            email: 'tony.stark@company.com',
            firstName: 'Tony',
            lastName: 'Stark',
            companyId: '0',
        },
        {
            id: '1',
            email: 'miles.morales@company.com',
            firstName: 'Miles',
            lastName: 'Morales',
            companyId: '1',
        },
    ]);

    getAll(): Observable<IUserDto[]> {
        return this._returnData(this._data.getAll());
    }

    getById(id: string): Observable<IUserDto> {
        return this._returnData(this._data.getById(id));
    }

    getByCompanyId(companyId: string): Observable<IUserDto> {
        return this._returnData(this._data.getOneByKey('companyId', companyId));
    }

    private _returnData(data: IUserDto | IUserDto[]): Observable<any> {
        return of(data).pipe(
            delay(randomizeDelay()),
            take(1),
            catchError(this._handleError)
        );
    }

    private _handleError(error: any) {
        return throwError(() => error);
    }
}

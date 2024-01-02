import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, take, throwError } from 'rxjs';

import { InMemoryDb } from '@codesign/shared/classes';
import { ICompanyDto } from '@codesign/shared/interfaces';
import { randomizeDelay } from '@codesign/shared/helpers';

@Injectable({
    providedIn: 'root',
})
export class CompanyRestService {
    private _data = new InMemoryDb<ICompanyDto>([
        {
            id: '0',
            name: 'Company 0',
            disabled: true,
        },
        {
            id: '1',
            name: 'Company 1',
            disabled: false,
        },
    ]);

    getAll(): Observable<ICompanyDto[]> {
        return this._returnData(this._data.getAll());
    }

    getById(id: string): Observable<ICompanyDto> {
        return this._returnData(this._data.getById(id));
    }

    private _returnData(data: ICompanyDto | ICompanyDto[]): Observable<any> {
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

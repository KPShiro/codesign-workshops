import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, take, throwError } from 'rxjs';

import { InMemoryDb } from '@codesign/shared/classes';
import { Currency } from '@codesign/shared/enums';
import { randomizeDelay, randomizeRequestDto } from '@codesign/shared/helpers';
import { IRequestDto } from '@codesign/shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class RequestsRestService {
    private _data = new InMemoryDb<IRequestDto>([
        randomizeRequestDto('0', '0', '0', Currency.EUR),
        randomizeRequestDto('1', '0', '0', Currency.EUR),
        randomizeRequestDto('2', '0', '0', Currency.EUR),
        randomizeRequestDto('3', '0', '0', Currency.EUR),
        randomizeRequestDto('4', '0', '0', Currency.EUR),
        randomizeRequestDto('5', '0', '0', Currency.EUR),
        randomizeRequestDto('6', '1', '1', Currency.EUR),
        randomizeRequestDto('7', '1', '1', Currency.EUR),
    ]);

    getAll(): Observable<IRequestDto[]> {
        return this._returnData(this._data.getAll());
    }

    getById(id: string): Observable<IRequestDto> {
        return this._returnData(this._data.getById(id));
    }

    getAllByCompanyId(companyId: string): Observable<IRequestDto[]> {
        return this._returnData(this._data.getAllByKey('companyId', companyId));
    }

    private _returnData(data: IRequestDto | IRequestDto[]): Observable<any> {
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

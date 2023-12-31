import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, take, throwError } from 'rxjs';

import { InMemoryDb } from '@codesign/shared/classes';
import { Currency } from '@codesign/shared/enums';
import { randomizeDelay } from '@codesign/shared/helpers';
import { IBalanceDto } from '@codesign/shared/interfaces';

@Injectable({
    providedIn: 'root',
})
export class BalanceRestService {
    private _data = new InMemoryDb<IBalanceDto>([
        {
            id: '0',
            amount: 5736.5,
            currency: Currency.EUR,
            companyId: '0',
        },
        {
            id: '1',
            amount: 250,
            currency: Currency.PLN,
            companyId: '1',
        },
    ]);

    getAll(): Observable<IBalanceDto[]> {
        return this._returnData(this._data.getAll());
    }

    getById(id: string): Observable<IBalanceDto> {
        return this._returnData(this._data.getById(id));
    }

    getByCompanyId(companyId: string): Observable<IBalanceDto> {
        return this._returnData(this._data.getOneByKey('companyId', companyId));
    }

    private _returnData(data: IBalanceDto | IBalanceDto[]): Observable<any> {
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

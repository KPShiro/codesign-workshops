import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IBalance } from '@codesign/rxjs/interfaces';
import { Currency } from '@codesign/rxjs/enums';
import { randomizeDelay } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class BalanceRestService {
    private readonly _data: IBalance[] = [
        {
            companyId: '0',
            allocated: 25.5,
            current: 974.5,
            threshold: 1000.0,
            currency: Currency.EUR,
        },
        {
            companyId: '1',
            allocated: 15.0,
            current: 585.0,
            threshold: 500.0,
            currency: Currency.PLN,
        },
    ];

    getByCompanyId(companyId: string): Observable<IBalance> {
        const entity = this._data.find(item => item.companyId === companyId);

        if (entity === undefined) {
            throw new Error('Balance not found!');
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }

    addAmount(companyId: string, amount: number): Observable<IBalance> {
        const entity = this._data.find(item => item.companyId === companyId);

        if (entity === undefined) {
            throw new Error('Balance not found!');
        }

        entity.current += amount;

        return this.getByCompanyId(companyId);
    }

    removeAmount(companyId: string, amount: number): Observable<IBalance> {
        const entity = this._data.find(item => item.companyId === companyId);

        if (entity === undefined) {
            throw new Error('Balance not found!');
        }

        if (entity.current - amount < 0) {
            throw new Error('Balance cannot be negative!');
        }

        entity.current -= amount;

        return this.getByCompanyId(companyId);
    }
}

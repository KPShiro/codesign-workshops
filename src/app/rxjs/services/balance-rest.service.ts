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
            allocated: 55.45,
            current: 944.55,
            currency: Currency.EUR,
        },
        {
            companyId: '1',
            allocated: 0,
            current: 3000,
            currency: Currency.PLN,
        },
    ];

    getByCompanyId(companyId: string): Observable<IBalance> {
        const entity = this._data.find(item => item.companyId === companyId);

        if (entity === undefined) {
            throw new Error('Balance not found');
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }

    topUp(companyId: string, amount: number): Observable<void> {
        const entity = this._data.find(item => item.companyId === companyId);

        if (entity === undefined) {
            throw new Error('Balance not found');
        }

        entity.current += amount;

        return of(undefined).pipe(delay(randomizeDelay()));
    }
}

import { Injectable } from '@angular/core';
import { ICompanyBalance } from '@codesign/logistics/interfaces';
import { companyBalances } from '@codesign/logistics/mocks';
import { getRandomNumber } from '@codesign/shared/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CompanyBalanceService {
    private _balance = new BehaviorSubject<ICompanyBalance | null>(null);

    get balance$(): Observable<ICompanyBalance | null> {
        return this._balance.asObservable();
    }

    get balance(): ICompanyBalance | null {
        return this._balance.getValue();
    }

    private _loading = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    private _storageKey: string = 'codesign.balanceId';

    get storageKey(): string {
        return this._storageKey;
    }

    onCompanySwitched(companyId: string): void {
        this._loading.next(true);

        const balance = companyBalances.find(
            balance => balance.companyId === companyId
        );

        if (!balance) {
            throw new Error('Not found!');
        }

        setTimeout(
            () => {
                localStorage.setItem(this.storageKey, balance.id);
                this._balance.next(balance);
                this._loading.next(false);
            },
            getRandomNumber(300, 500)
        );
    }

    refreshBalance(): void {
        this._loading.next(true);

        const balance = companyBalances.find(
            balance => balance.id === localStorage.getItem(this.storageKey)
        );

        if (!balance) {
            throw new Error('Not found!');
        }

        setTimeout(
            () => {
                localStorage.setItem(this.storageKey, balance.id);
                this._balance.next(balance);
                this._loading.next(false);
            },
            getRandomNumber(300, 500)
        );
    }

    clearData(): void {
        localStorage.removeItem(this.storageKey);
        this._balance.next(null);
        this._loading.next(false);
    }
}

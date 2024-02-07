import { Injectable } from '@angular/core';
import { ICompany } from '@codesign/logistics/interfaces';
import { companies } from '@codesign/logistics/mocks';
import { getRandomNumber } from '@codesign/shared/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CompanyAccountService {
    private _company = new BehaviorSubject<ICompany | null>(null);

    get company$(): Observable<ICompany | null> {
        return this._company.asObservable();
    }

    get company(): ICompany | null {
        return this._company.getValue();
    }

    private _loading = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    private _storageKey: string = 'codesign.companyId';

    get storageKey(): string {
        return this._storageKey;
    }

    switchAccount(id: string): void {
        this._loading.next(true);

        const company = companies.find(c => c.id === id);

        if (!company) {
            throw new Error('Company not found!');
        }

        setTimeout(
            () => {
                localStorage.setItem(this.storageKey, company.id);
                this._company.next(company);
                this._loading.next(false);
            },
            getRandomNumber(300, 1000)
        );
    }

    clearAccount(): void {
        localStorage.removeItem(this.storageKey);
        this._company.next(null);
        this._loading.next(false);
    }
}

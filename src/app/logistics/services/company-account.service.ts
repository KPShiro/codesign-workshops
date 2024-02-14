import { Injectable } from '@angular/core';
import { ICompany } from '@codesign/logistics/interfaces';
import { companies, users } from '@codesign/logistics/mocks';
import { getRandomNumber } from '@codesign/shared/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

export type LinkedCompany = Pick<ICompany, 'id' | 'name' | 'email' | 'erpCode'>;

@Injectable({
    providedIn: 'root',
})
export class CompanyAccountService {
    private _loading = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    private _storageKey: string = 'codesign.companyId';

    get storageKey(): string {
        return this._storageKey;
    }

    private _company = new BehaviorSubject<ICompany | null>(null);

    get company$(): Observable<ICompany | null> {
        return this._company.asObservable();
    }

    get company(): ICompany | null {
        return this._company.getValue();
    }

    get savedCompanyId(): string | null {
        return localStorage.getItem(this.storageKey) || null;
    }

    private _linkedCompanies = new BehaviorSubject<LinkedCompany[]>([]);

    get linkedCompanies$(): Observable<LinkedCompany[]> {
        return this._linkedCompanies.asObservable();
    }

    onUserSwitched(userId: string): void {
        this._loading.next(true);

        const user = users.find(u => u.id === userId);

        if (!user) {
            throw new Error('Not found!');
        }

        const companiesIds = companies.filter(c => user.companyIds.includes(c.id));
        const linkedCompanies = companiesIds.reduce((acc, company) => {
            acc.push(company);
            return acc;
        }, [] as LinkedCompany[]);

        setTimeout(
            () => {
                this.switchAccount(this.savedCompanyId || user.companyIds[0]);
                this._linkedCompanies.next(linkedCompanies);
                this._loading.next(false);
            },
            getRandomNumber(300, 500)
        );
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
            getRandomNumber(300, 500)
        );
    }

    clearData(): void {
        localStorage.removeItem(this.storageKey);
        this._company.next(null);
        this._loading.next(false);
    }
}

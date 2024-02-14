import { Component } from '@angular/core';
import { CompanyAccountService } from '@codesign/logistics/services';
import { combineLatest, filter, map } from 'rxjs';

@Component({
    selector: 'app-company-list-menu',
    templateUrl: 'company-list-menu.component.html',
})
export class CompanyListMenuComponent {
    vm$ = combineLatest([
        this._companyAccountService.company$,
        this._companyAccountService.linkedCompanies$,
    ]).pipe(
        filter(([company, companies]) => !!company && !!companies),
        map(([company, companies]) => ({ selectedCompanyId: company!.id, companies }))
    );

    constructor(private readonly _companyAccountService: CompanyAccountService) {}

    handleSelectCompany(id: string): void {
        this._companyAccountService.switchAccount(id);
    }
}

import { Component } from '@angular/core';
import { companies } from '@codesign/logistics/mocks';
import { CompanyAccountService } from '@codesign/logistics/services';
import { combineLatest, filter, map } from 'rxjs';

@Component({
    selector: 'app-navbar-company-widget',
    templateUrl: 'navbar-company-widget.component.html',
    styleUrls: ['navbar-company-widget.component.scss'],
})
export class NavbarCompanyWidgetComponent {
    vm$ = combineLatest([
        this._companyAccountService.company$,
        this._companyAccountService.loading$,
    ]).pipe(
        filter(([company]) => !!company),
        map(([company, companyLoading]) => ({
            company: {
                loading: companyLoading,
                name: company!.name,
            },
        }))
    );

    constructor(private readonly _companyAccountService: CompanyAccountService) {}

    protected handlePrimaryButtonClick(): void {
        throw new Error('Not implemented');
    }

    protected handleSecondaryButtonClick(): void {
        const id =
            localStorage.getItem(this._companyAccountService.storageKey) ===
            companies[0].id
                ? companies[1].id
                : companies[0].id;

        this._companyAccountService.switchAccount(id);
    }
}

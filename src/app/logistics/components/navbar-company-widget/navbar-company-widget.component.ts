import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { LogisticsRoutes } from '@codesign/logistics/logistics.routes';
import {
    CompanyAccountService,
    UserAccountService,
} from '@codesign/logistics/services';
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
        this._userAccountService.user$,
    ]).pipe(
        filter(([company, , user]) => !!company && !!user),
        map(([company, companyLoading, user]) => ({
            company: {
                loading: companyLoading,
                name: company!.name,
            },
            hasMultipleCompanies: user!.companyIds.length > 1 || false,
        }))
    );

    constructor(
        private readonly _companyAccountService: CompanyAccountService,
        private readonly _userAccountService: UserAccountService,
        private readonly _router: Router
    ) {}

    protected handlePrimaryButtonClick(): void {
        this._router.navigate(['/', Feature.LOGISTICS, LogisticsRoutes.COMPANY]);
    }

    protected handleSelectCompany(id: string): void {
        this._companyAccountService.switchAccount(id);
    }
}

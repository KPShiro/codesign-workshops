import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { LogisticsRoutes } from '@codesign/logistics/logistics.routes';
import { CompanyBalanceService } from '@codesign/logistics/services/company-balance.service';
import { combineLatest, filter, map } from 'rxjs';

@Component({
    selector: 'app-navbar-balance-widget',
    templateUrl: 'navbar-balance-widget.component.html',
})
export class NavbarBalanceWidgetComponent {
    vm$ = combineLatest([
        this._companyBalanceService.balance$,
        this._companyBalanceService.loading$,
    ]).pipe(
        filter(([balance]) => !!balance),
        map(([balance, balanceLoading]) => ({
            balance: {
                loading: balanceLoading,
                warning: balance!.amount.current <= balance!.amount.threshold,
                amount: balance!.amount,
                currency: balance!.currency,
            },
        }))
    );

    constructor(
        private readonly _companyBalanceService: CompanyBalanceService,
        private readonly _router: Router
    ) {}

    protected handlePrimaryButtonClick(): void {
        this._router.navigate([
            '/',
            Feature.LOGISTICS,
            LogisticsRoutes.COMPANY_BALANCE,
        ]);
    }
}

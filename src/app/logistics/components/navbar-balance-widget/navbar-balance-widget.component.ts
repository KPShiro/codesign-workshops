import { Component } from '@angular/core';
import { CompanyBalanceService } from '@codesign/logistics/services/company-balance.service';
import { combineLatest, filter, map } from 'rxjs';

@Component({
    selector: 'app-navbar-balance-widget',
    templateUrl: 'navbar-balance-widget.component.html',
    styleUrls: ['navbar-balance-widget.component.scss'],
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
                amount: balance!.amount.current,
                currency: balance!.currency,
            },
        }))
    );

    constructor(private readonly _companyBalanceService: CompanyBalanceService) {}

    protected handlePrimaryButtonClick(): void {
        this._companyBalanceService.refreshBalance();
    }

    protected handleSecondaryButtonClick(): void {
        throw new Error('Not implemented');
    }
}

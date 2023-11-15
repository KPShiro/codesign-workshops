import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { BalanceService, CompanyService } from '@codesign/rxjs/services';

@Component({
    selector: 'app-balance-widget',
    templateUrl: './balance-widget.component.html',
    styleUrls: ['./balance-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceWidgetComponent {
    viewModel$ = combineLatest([
        this._balanceService.balance$,
        this._balanceService.isBelowThreshold$,
        this._balanceService.loading$,
        this._companyService.company$,
    ]).pipe(
        map(([balance, isBelowThreshold, loading, company]) => ({
            balance,
            isBelowThreshold,
            loading,
            company,
        }))
    );

    constructor(
        private readonly _balanceService: BalanceService,
        private readonly _companyService: CompanyService
    ) {}

    topUp(companyId: string): void {
        this._balanceService.topUp(companyId, 100);
    }
}

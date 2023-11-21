import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { BalanceStateService, CompanyStateService } from '@codesign/rxjs/services';
import { TopUpCommand } from '@codesign/rxjs/commands';
import { ICompany } from '@codesign/rxjs/interfaces';

@Component({
    selector: 'app-balance-widget',
    templateUrl: './balance-widget.component.html',
    styleUrls: ['./balance-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceWidgetComponent {
    protected viewModel$ = combineLatest([
        this._balanceStateService.state$,
        this._companyStateService.state$,
    ]).pipe(
        map(([, companyState]) => ({
            company: companyState.activeCompany,
            balance: {
                currentAmount: this._balanceStateService.currentAmount,
                allocatedAmount: this._balanceStateService.allocatedAmount,
                thresholdAmount: this._balanceStateService.thresholdAmount,
                currency: this._balanceStateService.currency,
                processing: this._balanceStateService.processing,
                showAllocatedWarning: this._balanceStateService.showAllocatedWarning,
                showThresholdWarning: this._balanceStateService.showThresholdWarning,
            },
        }))
    );

    protected actions = [
        inject(TopUpCommand).build<ICompany>({
            resolveParams: company => ({
                companyId: company.id,
                amount: 100,
            }),
        }),
    ];

    constructor(
        private readonly _balanceStateService: BalanceStateService,
        private readonly _companyStateService: CompanyStateService
    ) {}
}

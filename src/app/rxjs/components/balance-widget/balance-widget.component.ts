import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { BalanceService } from '@codesign/rxjs/services';
import { TopUpCommand } from '@codesign/rxjs/commands';
import { IBalance } from '@codesign/rxjs/interfaces';

@Component({
    selector: 'app-balance-widget',
    templateUrl: './balance-widget.component.html',
    styleUrls: ['./balance-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceWidgetComponent {
    actions = [
        this._topUpCommand.build<IBalance>({
            resolveParams: balance => ({
                companyId: balance.companyId,
                amount: 100,
            }),
        }),
    ];

    viewModel$ = combineLatest([this._balanceService.balance$]).pipe(
        map(([balance]) => ({ balance }))
    );

    constructor(
        private readonly _balanceService: BalanceService,
        private readonly _topUpCommand: TopUpCommand
    ) {}
}

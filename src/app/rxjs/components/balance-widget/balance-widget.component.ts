import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { BalanceService } from '@codesign/rxjs/services';
import { TopUpCommand } from '@codesign/rxjs/commands';
import { IBalance } from '@codesign/rxjs/interfaces';
import { createAction } from '@codesign/rxjs/rxjs.helpers';

@Component({
    selector: 'app-balance-widget',
    templateUrl: './balance-widget.component.html',
    styleUrls: ['./balance-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceWidgetComponent {
    viewModel$ = combineLatest([this._balanceService.balance$]).pipe(
        map(([balance]) => ({
            balance,
        }))
    );

    actions = [
        createAction(this._topUpCommand, (balance: IBalance) =>
            this._topUpCommand.execute({ companyId: balance.companyId, amount: 100 })
        ),
    ];

    constructor(
        private readonly _balanceService: BalanceService,
        private readonly _topUpCommand: TopUpCommand
    ) {}
}

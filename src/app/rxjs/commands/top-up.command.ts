import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { BalanceRestService, BalanceService } from '@codesign/rxjs/services';
import { Command } from '@codesign/rxjs/commands';
import { TopUpDialogComponent } from '../components';

interface ITopUpCommandParams {
    companyId: string;
    amount: number;
}

@Injectable()
export class TopUpCommand extends Command {
    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _balanceService: BalanceService,
        private readonly _dialog: Dialog
    ) {
        super('add', 'Top up balance');
    }

    execute(params: ITopUpCommandParams): void {
        this._dialog.open(TopUpDialogComponent, {
            width: '512px',
            data: {
                companyId: params.companyId,
                amount: params.amount,
            },
        });
    }

    undo(): void {
        throw new Error('Method not implemented!');
    }
}

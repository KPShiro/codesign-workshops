import { Injectable } from '@angular/core';

import { BalanceRestService, BalanceService } from '@codesign/rxjs/services';
import { Command } from '@codesign/rxjs/commands';

interface IPayCommandParams {
    companyId: string;
    amount: number;
}

@Injectable()
export class PayCommand extends Command {
    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _balanceService: BalanceService
    ) {
        super('remove', 'Pay');
    }

    execute(params: IPayCommandParams): void {
        this._performAsyncAction({
            observable: this._balanceRestService.removeAmount(
                params.companyId,
                params.amount
            ),
            onComplete: () => {
                this._balanceService.refreshBalance();
            },
        });
    }

    undo(): void {
        throw new Error('Method not implemented!');
    }
}

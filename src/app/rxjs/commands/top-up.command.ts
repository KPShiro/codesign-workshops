import { Injectable } from '@angular/core';

import { BalanceRestService, BalanceService } from '@codesign/rxjs/services';
import { Command } from '@codesign/rxjs/commands';
import { Observable, tap } from 'rxjs';

interface ITopUpCommandParams {
    companyId: string;
    amount: number;
}

@Injectable()
export class TopUpCommand extends Command<ITopUpCommandParams> {
    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _balanceService: BalanceService
    ) {
        super('add', 'Top up balance');
    }

    execute(params: ITopUpCommandParams): Observable<void> {
        this._balanceService.setProcessing(true);

        return this._balanceRestService
            .addAmount(params.companyId, params.amount)
            .pipe(tap(() => this._balanceService.refreshData()));
    }

    undo(): void {
        throw new Error('Method not implemented!');
    }
}

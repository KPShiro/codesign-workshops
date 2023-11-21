import { Injectable } from '@angular/core';
import { Observable, catchError, of, take, tap } from 'rxjs';

import { BalanceRestService, BalanceStateService } from '@codesign/rxjs/services';
import { Command } from '@codesign/rxjs/commands';

interface ITopUpCommandParams {
    companyId: string;
    amount: number;
}

@Injectable()
export class TopUpCommand extends Command<ITopUpCommandParams> {
    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _balanceStateService: BalanceStateService
    ) {
        super('add', 'Top up balance');
    }

    execute(params: ITopUpCommandParams): Observable<void> {
        this._balanceStateService.setProcessing(true);

        return this._balanceRestService.addAmount(params.companyId, params.amount).pipe(
            take(1),
            tap(balance => {
                this._balanceStateService.setBalance(balance);
                this._balanceStateService.setProcessing(false);
            }),
            catchError(error => {
                this._balanceStateService.setProcessing(false);
                console.error(error);

                return of(error);
            })
        );
    }
}

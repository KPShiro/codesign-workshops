import { Injectable } from '@angular/core';
import { Observable, catchError, of, take, tap } from 'rxjs';

import { BalanceRestService, BalanceStateService } from '@codesign/rxjs/services';
import { Command } from '@codesign/rxjs/commands';

interface IRefreshBalanceCommandParams {
    companyId: string;
}

@Injectable()
export class RefreshBalanceCommand extends Command {
    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _balanceStateService: BalanceStateService
    ) {
        super('refresh', 'Refresh balance');
    }

    execute(params: IRefreshBalanceCommandParams): Observable<void> {
        this._balanceStateService.setProcessing(true);

        return this._balanceRestService.getByCompanyId(params.companyId).pipe(
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

import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    combineLatest,
    finalize,
    map,
    share,
    switchMap,
    take,
    tap,
} from 'rxjs';

import { BalanceRestService, CompanyService } from '@codesign/rxjs/services';
import { filterDefined } from '@codesign/rxjs/rxjs.helpers';
import { Currency } from '@codesign/rxjs/enums';

@Injectable()
export class BalanceService {
    private _refresh = new BehaviorSubject<boolean>(false);
    private _processing = new BehaviorSubject<boolean>(false);

    private _balance$ = combineLatest([
        this._companyService.company$,
        this._refresh,
    ]).pipe(
        map(([company]) => company),
        filterDefined(),
        tap(() => this._processing.next(true)),
        switchMap(company =>
            this._balanceRestService
                .getByCompanyId(company.id)
                .pipe(finalize(() => this._processing.next(false)))
        ),
        share()
    );

    balance$ = combineLatest([this._balance$, this._processing]).pipe(
        map(([balance, processing]) => ({
            ...balance,
            isBelowThreshold: balance.current <= balance.threshold,
            processing,
        }))
    );

    get defaultCurrency(): string {
        return Currency.EUR;
    }

    get currency(): string {
        let value: string = this.defaultCurrency;

        this.balance$.pipe(take(1)).subscribe(balance => {
            value = balance.currency;
        });

        return value;
    }

    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _companyService: CompanyService
    ) {}

    setProcessing(processing: boolean): void {
        this._processing.next(processing);
    }

    refreshData(): void {
        this._refresh.next(true);
    }
}

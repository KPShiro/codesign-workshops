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

@Injectable()
export class BalanceService {
    private _refresh = new BehaviorSubject<boolean>(false);
    private _loading = new BehaviorSubject<boolean>(false);

    loading$ = this._loading.asObservable();

    balance$ = combineLatest([this._companyService.company$, this._refresh]).pipe(
        map(([company]) => company),
        filterDefined(),
        tap(() => this._loading.next(true)),
        switchMap(company =>
            this._balanceRestService
                .getByCompanyId(company.id)
                .pipe(finalize(() => this._loading.next(false)))
        ),
        share()
    );

    constructor(
        private readonly _balanceRestService: BalanceRestService,
        private readonly _companyService: CompanyService
    ) {}

    topUp(companyId: string, amount: number): void {
        this._loading.next(true);

        this._balanceRestService
            .topUp(companyId, amount)
            .pipe(
                take(1),
                finalize(() => this.refresh())
            )
            .subscribe();
    }

    refresh(): void {
        this._refresh.next(true);
    }
}

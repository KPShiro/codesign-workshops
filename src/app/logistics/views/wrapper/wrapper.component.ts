import { Component, OnDestroy, OnInit } from '@angular/core';
import { companies } from '@codesign/logistics/mocks';
import {
    CompanyAccountService,
    CompanyBalanceService,
} from '@codesign/logistics/services';
import { filterUndefined } from '@codesign/shared/helpers';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.scss'],
})
export class WrapperViewComponent implements OnInit, OnDestroy {
    private readonly _destroy = new Subject<void>();
    destroy$ = this._destroy.asObservable();

    constructor(
        private readonly _companyAccountService: CompanyAccountService,
        private readonly _companyBalanceService: CompanyBalanceService
    ) {}

    ngOnInit(): void {
        this._companyAccountService.company$
            .pipe(
                filterUndefined(),
                tap(company =>
                    this._companyBalanceService.onCompanySwitched(company?.id)
                ),
                takeUntil(this.destroy$)
            )
            .subscribe();

        const companyId = this._companyAccountService.company?.id || companies[0].id;

        this._companyAccountService.switchAccount(companyId);
        this._companyBalanceService.onCompanySwitched(companyId);
    }

    ngOnDestroy(): void {
        this._destroy.next();
        this._destroy.complete();
    }
}

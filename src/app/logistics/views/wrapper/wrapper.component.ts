import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    CompanyAccountService,
    CompanyBalanceService,
    CompanyRequestsService,
    UserAccountService,
} from '@codesign/logistics/services';
import { filterUndefined } from '@codesign/shared/helpers';
import { Subject, takeUntil } from 'rxjs';

@Component({
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.scss'],
})
export class WrapperViewComponent implements OnInit, OnDestroy {
    private readonly _destroy = new Subject<void>();
    destroy$ = this._destroy.asObservable();

    constructor(
        private readonly _userAccountService: UserAccountService,
        private readonly _companyAccountService: CompanyAccountService,
        private readonly _companyBalanceService: CompanyBalanceService,
        private readonly _companyRequestsService: CompanyRequestsService
    ) {}

    ngOnInit(): void {
        this._companyAccountService.company$
            .pipe(filterUndefined(), takeUntil(this.destroy$))
            .subscribe(company => {
                this._companyBalanceService.onCompanySwitched(company.id);
                this._companyRequestsService.onCompanySwitched(company.id);
            });

        this._userAccountService.user$
            .pipe(filterUndefined(), takeUntil(this.destroy$))
            .subscribe(user => {
                this._companyAccountService.onUserSwitched(user.id);
            });
    }

    ngOnDestroy(): void {
        this._destroy.next();
        this._destroy.complete();
    }
}

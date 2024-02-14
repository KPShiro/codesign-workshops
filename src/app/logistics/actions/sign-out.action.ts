import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { LogisticsRoutes } from '@codesign/logistics/logistics.routes';
import {
    CompanyAccountService,
    CompanyBalanceService,
    UserAccountService,
} from '@codesign/logistics/services';
import { Command } from '@codesign/shared/classes';

@Injectable({
    providedIn: 'root',
})
export class SignOutAction extends Command<void> {
    constructor(
        private readonly _userAccountService: UserAccountService,
        private readonly _companyAccountService: CompanyAccountService,
        private readonly _companyBalanceService: CompanyBalanceService,
        private readonly _router: Router
    ) {
        super('logout', 'Sign out');
    }

    execute(): void {
        this._companyBalanceService.clearData();
        this._companyAccountService.clearData();
        this._userAccountService.clearData();

        this._router.navigate(['/', Feature.LOGISTICS, LogisticsRoutes.SIGN_IN]);
    }
}

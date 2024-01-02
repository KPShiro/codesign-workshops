import { Component } from '@angular/core';

import {
    CompanyRestService,
    UsersRestService,
    BalanceRestService,
} from '@codesign/shared/services';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-exercise-0-view',
    templateUrl: 'exercise-0.component.html',
    styleUrls: ['exercise-0.component.scss'],
})
export class Exercise0ViewComponent {
    user$ = this._usersRestService.getById('0');
    company$ = this.user$.pipe(
        switchMap(user => this._companyRestService.getById(user.companyId))
    );
    balance$ = this.company$.pipe(
        switchMap(company => this._balanceRestService.getByCompanyId(company.id))
    );

    constructor(
        private readonly _companyRestService: CompanyRestService,
        private readonly _usersRestService: UsersRestService,
        private readonly _balanceRestService: BalanceRestService
    ) {}
}

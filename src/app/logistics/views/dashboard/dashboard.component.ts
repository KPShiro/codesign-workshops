import { Component } from '@angular/core';
import { CompanyRequestsService } from '@codesign/logistics/services';
import { combineLatest, map } from 'rxjs';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardViewComponent {
    vm$ = combineLatest([
        this._companyRequestsService.requests$,
        this._companyRequestsService.loading$,
    ]).pipe(map(([requests, requestsLoading]) => ({ requests, requestsLoading })));

    constructor(private readonly _companyRequestsService: CompanyRequestsService) {}
}

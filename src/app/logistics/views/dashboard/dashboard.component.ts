import { Component } from '@angular/core';
import { RequestsService } from '@codesign/logistics/services';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardViewComponent {
    requests = this._requestsService.requests;

    constructor(private readonly _requestsService: RequestsService) {}
}

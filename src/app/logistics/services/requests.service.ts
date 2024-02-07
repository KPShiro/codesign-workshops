import { Injectable } from '@angular/core';

import * as logisticsHelpers from '@codesign/logistics/helpers';
import { IRequest } from '@codesign/logistics/interfaces';

@Injectable({
    providedIn: 'root',
})
export class RequestsService {
    private _date: IRequest[] = [];

    constructor() {
        for (let i = 0; i < 3; i++) {
            this._date.push(logisticsHelpers.getRandomRequests());
        }
    }

    get requests(): IRequest[] {
        return this._date;
    }
}

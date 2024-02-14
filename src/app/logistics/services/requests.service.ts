import { Injectable } from '@angular/core';
import * as logisticsHelpers from '@codesign/logistics/helpers';
import { IRequest } from '@codesign/logistics/interfaces';
import { Currency, RequestStatus } from '../enums';

@Injectable({
    providedIn: 'root',
})
export class RequestsService {
    private _date: IRequest[] = [
        logisticsHelpers.getRandomRequest({
            status: logisticsHelpers.getRequestStatus(RequestStatus.PENDING),
            author: logisticsHelpers.getAuthor(
                '0000-0000-0000-0001',
                '0000-0000-0000-0000'
            ),
            price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
        }),
        logisticsHelpers.getRandomRequest({
            status: logisticsHelpers.getRequestStatus(RequestStatus.APPROVED),
            author: logisticsHelpers.getAuthor(
                '0000-0000-0000-0000',
                '0000-0000-0000-0000'
            ),
            price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
        }),
        logisticsHelpers.getRandomRequest({
            status: logisticsHelpers.getRequestStatus(RequestStatus.APPROVED),
            author: logisticsHelpers.getAuthor(
                '0000-0000-0000-0001',
                '0000-0000-0000-0000'
            ),
            price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
        }),
        logisticsHelpers.getRandomRequest({
            status: logisticsHelpers.getRequestStatus(RequestStatus.DENIED),
            author: logisticsHelpers.getAuthor(
                '0000-0000-0000-0001',
                '0000-0000-0000-0000'
            ),
            price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
        }),
        logisticsHelpers.getRandomRequest({
            status: logisticsHelpers.getRequestStatus(RequestStatus.CANCELLED),
            author: logisticsHelpers.getAuthor(
                '0000-0000-0000-0000',
                '0000-0000-0000-0000'
            ),
            price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
        }),
    ];

    get requests(): IRequest[] {
        return this._date;
    }
}

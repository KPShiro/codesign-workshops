import { Injectable } from '@angular/core';
import { Currency, RequestStatus } from '@codesign/logistics/enums';
import * as logisticsHelpers from '@codesign/logistics/helpers';
import { IRequest } from '@codesign/logistics/interfaces';
import { users } from '@codesign/logistics/mocks';
import * as sharedHelpers from '@codesign/shared/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

const requests: IRequest[] = [
    logisticsHelpers.getRandomRequest({
        status: logisticsHelpers.getRequestStatus(RequestStatus.PENDING),
        author: logisticsHelpers.getAuthor(users[0].id, users[0].companyIds[0]),
        price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
    }),
    logisticsHelpers.getRandomRequest({
        status: logisticsHelpers.getRequestStatus(RequestStatus.APPROVED),
        author: logisticsHelpers.getAuthor(users[0].id, users[0].companyIds[0]),
        price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
    }),
    logisticsHelpers.getRandomRequest({
        status: logisticsHelpers.getRequestStatus(RequestStatus.APPROVED),
        author: logisticsHelpers.getAuthor(users[0].id, users[0].companyIds[0]),
        price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
    }),
    logisticsHelpers.getRandomRequest({
        status: logisticsHelpers.getRequestStatus(RequestStatus.DENIED),
        author: logisticsHelpers.getAuthor(users[0].id, users[0].companyIds[0]),
        price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
    }),
    logisticsHelpers.getRandomRequest({
        status: logisticsHelpers.getRequestStatus(RequestStatus.CANCELLED),
        author: logisticsHelpers.getAuthor(users[0].id, users[1].companyIds[0]),
        price: logisticsHelpers.getRandomPrice(5, 20, Currency.USD),
    }),
];

@Injectable({
    providedIn: 'root',
})
export class CompanyRequestsService {
    private _requests = new BehaviorSubject<IRequest[]>([]);

    get requests$(): Observable<IRequest[]> {
        return this._requests.asObservable();
    }

    get requests(): IRequest[] {
        return this._requests.getValue();
    }

    private _loading = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    onCompanySwitched(companyId: string): void {
        this._loading.next(true);

        const companyRequests = requests.filter(r => r.author.company.id === companyId);

        setTimeout(
            () => {
                this._requests.next(companyRequests);
                this._loading.next(false);
            },
            sharedHelpers.getRandomNumber(300, 500)
        );
    }

    clearData(): void {
        this._requests.next([]);
        this._loading.next(false);
    }
}

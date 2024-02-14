import {
    Carrier,
    ContainerSize,
    ContainerType,
    Currency,
    RequestStatus,
} from '@codesign/logistics/enums';
import {
    ILocation,
    IPrice,
    IRequest,
    IRequestAuthor,
    IRequestPrice,
    IRequestStatus,
} from '@codesign/logistics/interfaces';
import { exchangeRatesSet, requestStatusesSet } from './constants';

import * as logisticsMocks from '@codesign/logistics/mocks';
import * as sharedHelpers from '@codesign/shared/helpers';

export function getRandomContainerNumber(text: string = 'TEST'): string {
    return `${text}${sharedHelpers.getRandomNumber(100000, 999999)}`;
}

export function getRandomBookingReference(bookingReference?: string): string {
    const randomId = sharedHelpers.getRandomNumber(100, 999);
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    return bookingReference || `REF-${randomId}/${currentMonth}/${currentYear}`;
}

export function getRandomContainerSize(): ContainerSize {
    return sharedHelpers.getRandomEnumValue(ContainerSize);
}

export function getRandomContainerType(): ContainerType {
    return sharedHelpers.getRandomEnumValue(ContainerType);
}

export function getRandomCarrier(): Carrier {
    return sharedHelpers.getRandomEnumValue(Carrier);
}

export function getRequestStatus(status: RequestStatus): IRequestStatus {
    const requestStatuses = [...requestStatusesSet];
    return requestStatuses.find(requestStatus => requestStatus.status === status)!;
}

export function getRandomRequestStatus(): IRequestStatus {
    const requestStatuses = [...requestStatusesSet];
    const index = sharedHelpers.getRandomNumber(0, requestStatuses.length - 1);

    return requestStatuses[index];
}

export function getAuthor(userId: string, companyId: string): IRequestAuthor {
    return {
        user: logisticsMocks.users.find(user => user.id === userId)!,
        company: logisticsMocks.companies.find(company => company.id === companyId)!,
    };
}

export function getRandomAuthor(): IRequestAuthor {
    const index = sharedHelpers.getRandomNumber(0, logisticsMocks.users.length - 1);

    return {
        user: logisticsMocks.users[index],
        company: logisticsMocks.companies[index],
    };
}

export function getRandomLocation(): ILocation {
    const index = sharedHelpers.getRandomNumber(0, logisticsMocks.locations.length - 1);

    return logisticsMocks.locations[index];
}

export function exchangeAmount(amount: number, currency: Currency): IPrice {
    const exchangeRate = [...exchangeRatesSet].find(rate => rate.currency === currency);

    if (exchangeRate === undefined) {
        throw new Error('Exchange rate not found');
    }

    return {
        amount: amount * exchangeRate.rate,
        currency: currency,
    };
}

export function getRandomPrice(
    min: number = 10,
    max: number = 100,
    currency?: Currency
): IRequestPrice {
    const randomAmount = sharedHelpers.getRandomNumber(min, max);
    const randomCurrency = currency || sharedHelpers.getRandomEnumValue(Currency);

    return {
        current: exchangeAmount(randomAmount, randomCurrency),
        original: {
            currency: Currency.EUR,
            amount: randomAmount,
        },
    };
}

export function getRandomRequest(request?: Partial<IRequest>): IRequest {
    return {
        id: request?.id || sharedHelpers.generateGUID(),
        status: request?.status || getRandomRequestStatus(),
        createdAt: request?.createdAt || sharedHelpers.getRandomDate().getTime(),
        reference: request?.reference || getRandomBookingReference(),
        container: {
            number: request?.container?.number || getRandomContainerNumber(),
            size: request?.container?.size || getRandomContainerSize(),
            type: request?.container?.type || getRandomContainerType(),
        },
        author: request?.author || getRandomAuthor(),
        carrier: request?.carrier || getRandomCarrier(),
        price: request?.price || getRandomPrice(5, 25),
        origin: request?.origin || getRandomLocation(),
        destination: request?.destination || getRandomLocation(),
    };
}

export function getInitials(fullName: string): string {
    const nameParts = fullName.split(' ');

    if (nameParts.length === 1) {
        return nameParts[0].substring(0, 2).toUpperCase();
    }

    return nameParts
        .map(part => part.substring(0, 1).toUpperCase())
        .slice(0, 2)
        .join('');
}

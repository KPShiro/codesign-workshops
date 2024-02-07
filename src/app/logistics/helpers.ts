import {
    Carrier,
    ContainerSize,
    ContainerType,
    Currency,
} from '@codesign/logistics/enums';
import {
    ILocation,
    IPrice,
    IRequest,
    IRequestAuthor,
    IRequestPrice,
    IRequestStatus,
} from '@codesign/logistics/interfaces';
import * as logisticsMocks from '@codesign/logistics/mocks';
import * as sharedHelpers from '@codesign/shared/helpers';
import { exchangeRatesSet, requestStatusesSet } from './constants';

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

export function getRandomRequestStatus(): IRequestStatus {
    const requestStatuses = [...requestStatusesSet];
    const index = sharedHelpers.getRandomNumber(0, requestStatuses.length - 1);

    return requestStatuses[index];
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
        currency: Currency.EUR,
    };
}

export function getRandomPrice(): IRequestPrice {
    const randomAmount = sharedHelpers.getRandomNumber(10, 100);
    const randomCurrency = sharedHelpers.getRandomEnumValue(Currency);

    return {
        current: {
            currency: randomCurrency,
            amount: randomAmount,
        },
        original: exchangeAmount(randomAmount, randomCurrency),
    };
}

export function getRandomRequests(request?: Partial<IRequest>): IRequest {
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
        price: request?.price || getRandomPrice(),
        origin: request?.origin || getRandomLocation(),
        destination: request?.destination || getRandomLocation(),
    };
}

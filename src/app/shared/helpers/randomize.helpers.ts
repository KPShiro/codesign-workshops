import {
    Carrier,
    ContainerSize,
    ContainerType,
    Currency,
    RequestStatus,
} from '@codesign/shared/enums';
import { IRequestDto } from '@codesign/shared/interfaces';

export function randomizeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeEnum(enumObject: any): string {
    const keys = Object.keys(enumObject);

    return keys[randomizeNumber(0, keys.length - 1)];
}

export function randomizeDelay(min: number = 100, max: number = 1000): number {
    return randomizeNumber(min, max);
}

export function randomizeDateFromDate(
    date: Date = new Date(),
    min: number = 0,
    max: number = 14
): Date {
    const days = randomizeNumber(min, max);
    date.setDate(date.getDate() + days);

    return date;
}

export function randomizeContainerNumber(pre: string = 'TEST'): string {
    const number = randomizeNumber(100000, 999999);

    return `${pre}${number}`;
}

export function randomizeContainerSize(): ContainerSize {
    return randomizeEnum(ContainerSize) as ContainerSize;
}

export function randomizeContainerType(): ContainerType {
    return randomizeEnum(ContainerType) as ContainerType;
}

export function randomizeRequestStatus(): RequestStatus {
    return randomizeEnum(RequestStatus) as RequestStatus;
}

export function randomizeCarrier(): Carrier {
    return randomizeEnum(Carrier) as Carrier;
}

export function randomizeRequestDto(
    id: string,
    authorId: string,
    companyId: string,
    currency: Currency,
    createdAt: Date = new Date()
): IRequestDto {
    const createdAtDate = randomizeDateFromDate(createdAt);
    const plannedAtDate = randomizeDateFromDate(createdAtDate, randomizeNumber(1, 10));

    return {
        id,
        authorId,
        companyId,
        carrier: randomizeCarrier(),
        status: randomizeRequestStatus(),
        createdAt: createdAtDate.getTime(),
        plannedAt: plannedAtDate.getTime(),
        container: {
            number: randomizeContainerNumber(),
            size: randomizeContainerSize(),
            type: randomizeContainerType(),
        },
        price: {
            amount: randomizeNumber(5, 10),
            currency: currency,
        },
    };
}

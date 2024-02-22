import { ContainerType, Currency, RequestStatus } from '@codesign/logistics/enums';

export const containerTypeSet = new Set<{ type: ContainerType; label: string }>([
    {
        type: ContainerType.DV,
        label: 'Dry Van',
    },
    {
        type: ContainerType.HC,
        label: 'High Cube',
    },
    {
        type: ContainerType.OT,
        label: 'Open Top',
    },
    {
        type: ContainerType.RF,
        label: 'Reefer',
    },
]);

export const exchangeRatesSet = new Set<{ currency: Currency; rate: number }>([
    {
        currency: Currency.EUR,
        rate: 1,
    },
    {
        currency: Currency.PLN,
        rate: 4.33,
    },
    {
        currency: Currency.USD,
        rate: 1.12,
    },
]);

export const requestStatusesSet = new Set<{
    status: RequestStatus;
    name: string;
    description: string;
}>([
    {
        status: RequestStatus.PENDING,
        name: 'Pending',
        description: 'Request is waiting for an action',
    },
    {
        status: RequestStatus.APPROVED,
        name: 'Approved',
        description: 'Request has been approved',
    },
    {
        status: RequestStatus.DENIED,
        name: 'Denied',
        description: 'Request has been denied',
    },
    {
        status: RequestStatus.CANCELLED,
        name: 'Cancelled',
        description: 'Request has been cancelled',
    },
]);

import { Currency } from '@codesign/logistics/enums';
import {
    ICompany,
    ICompanyBalance,
    ILocation,
    IUser,
} from '@codesign/logistics/interfaces';

import * as sharedHelpers from '@codesign/shared/helpers';

export const locations: ILocation[] = [
    {
        id: sharedHelpers.generateGUID(),
        name: 'Codesign Headquarters',
        address: {
            addressLine: 'Głowackiego 24/55',
            zip: '30-087',
            city: 'Kraków',
            country: 'Poland',
            state: 'Małopolskie',
        },
    },
    {
        id: sharedHelpers.generateGUID(),
        name: 'John Paul II Depot',
        address: {
            addressLine: 'Papieska 21/37',
            zip: '30-122',
            city: 'Kraków',
            country: 'Poland',
            state: 'Małopolskie',
        },
    },
];

export const companies: ICompany[] = [
    {
        id: '0000-0000-0000-0000',
        name: 'Stark Industries Inc.',
        email: 'contact@stark.com',
        erpCode: '0000',
    },
    {
        id: '0000-0000-0000-0001',
        name: 'FastTravel Ltd.',
        email: 'contact@fast-travel.com',
        erpCode: '0001',
    },
];

export const companyBalances: ICompanyBalance[] = [
    {
        id: '0000-0000-0000-0000',
        companyId: companies[0].id,
        amount: {
            current: 1000,
            threshold: 200,
            allocated: 0,
        },
        currency: Currency.USD,
    },
    {
        id: '0000-0000-0000-0001',
        companyId: companies[1].id,
        amount: {
            current: 125.5,
            threshold: 200,
            allocated: 25.5,
        },
        currency: Currency.EUR,
    },
];

export const users: IUser[] = [
    {
        id: '0000-0000-0000-0000',
        companyIds: [companies[0].id, companies[1].id],
        firstName: 'Anthony',
        lastName: 'Stark',
        email: 'iron.man@stark.com',
    },
    {
        id: '0000-0000-0000-0001',
        companyIds: [companies[0].id],
        firstName: 'Peter',
        lastName: 'Parker',
        email: 'peter.parker@stark.com',
    },
];

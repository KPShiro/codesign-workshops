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
        name: 'Codesign',
        email: 'contact@codesign.com',
    },
    {
        id: '0000-0000-0000-0001',
        name: 'SpeedX Logistics Inc.',
        email: 'contact@speedx.com',
    },
];

export const users: IUser[] = [
    {
        id: '0000-0000-0000-0000',
        companyIds: [companies[0].id],
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@codesign.com',
    },
    {
        id: '0000-0000-0000-0001',
        companyIds: [companies[1].id],
        firstName: 'Amanda',
        lastName: 'Thomason',
        email: 'amanda.thomason@speedx.com',
    },
];

export const companyBalances: ICompanyBalance[] = [
    {
        id: '0000-0000-0000-0000',
        companyId: companies[0].id,
        amount: {
            current: 420,
            threshold: 500,
            allocated: 21.37,
        },
        currency: Currency.EUR,
    },
    {
        id: '0000-0000-0000-0001',
        companyId: companies[1].id,
        amount: {
            current: 1000,
            threshold: 200,
            allocated: 0,
        },
        currency: Currency.PLN,
    },
];

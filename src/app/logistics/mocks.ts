import { ICompany, ILocation, IUser } from '@codesign/logistics/interfaces';
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
];

export const users: IUser[] = [
    {
        id: '0000-0000-0000-0000',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@codesign.com',
    },
];

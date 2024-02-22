import { IAddress } from '@codesign/logistics/interfaces';

export interface ILocation {
    id: string;
    name: string;
    address: IAddress;
}

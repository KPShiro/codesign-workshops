import { IPrice } from '@codesign/logistics/interfaces';

export interface IRequestPrice {
    current: IPrice;
    original: IPrice;
}

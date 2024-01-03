import { Currency } from '@codesign/shared/enums';

export interface IPriceDto {
    amount: number;
    currency: Currency;
}

export interface IPrice {
    amount: number;
    currency: Currency;
}

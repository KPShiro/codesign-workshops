import { Currency } from '@codesign/shared/enums';

export interface IBalanceDto {
    id: string;
    amount: number;
    currency: Currency;
    companyId: string;
}

export interface IBalance {
    id: string;
    amount: number;
    currency: Currency;
    companyId: string;
}

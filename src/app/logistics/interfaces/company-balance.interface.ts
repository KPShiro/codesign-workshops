import { Currency } from '@codesign/logistics/enums';

export interface ICompanyBalance {
    id: string;
    companyId: string;
    currency: Currency;
    amount: {
        current: number;
        allocated: number;
        threshold: number;
    };
}

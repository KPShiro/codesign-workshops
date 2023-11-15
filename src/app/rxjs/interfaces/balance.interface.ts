import { Currency } from '@codesign/rxjs/enums';

export interface IBalance {
    companyId: string;
    current: number;
    allocated: number;
    threshold: number;
    currency: Currency;
}

import { Currency } from '@codesign/rxjs/enums';

export interface IBalanceState {
    currentAmount: number;
    allocatedAmount: number;
    thresholdAmount: number;

    processing: boolean;
    currency: Currency;

    showAllocatedWarning: boolean;
    showThresholdWarning: boolean;
}

import { Injectable } from '@angular/core';

import { Currency } from '@codesign/rxjs/enums';
import { IBalance, IBalanceState } from '@codesign/rxjs/interfaces';
import { StateService } from '@codesign/rxjs/services';

@Injectable()
export class BalanceStateService extends StateService<IBalanceState> {
    get currentAmount(): number {
        return this.state.currentAmount;
    }

    get allocatedAmount(): number {
        return this.state.allocatedAmount;
    }

    get thresholdAmount(): number {
        return this.state.thresholdAmount;
    }

    get currency(): Currency {
        return this.state.currency;
    }

    get processing(): boolean {
        return this.state.processing;
    }

    get showAllocatedWarning(): boolean {
        return this.state.showAllocatedWarning;
    }

    get showThresholdWarning(): boolean {
        return this.state.showThresholdWarning;
    }

    constructor() {
        super({
            currentAmount: 0,
            allocatedAmount: 0,
            thresholdAmount: 0,
            currency: Currency.EUR,
            processing: false,
            showAllocatedWarning: false,
            showThresholdWarning: false,
        });
    }

    setBalance(balance: IBalance): void {
        this.updateState({
            currentAmount: balance.current,
            allocatedAmount: balance.allocated,
            thresholdAmount: balance.threshold,
            currency: balance.currency,
            showAllocatedWarning: balance.allocated > 0,
            showThresholdWarning: balance.current <= balance.threshold,
        });
    }

    setProcessing(processing: boolean): void {
        this.updateState({ processing });
    }
}

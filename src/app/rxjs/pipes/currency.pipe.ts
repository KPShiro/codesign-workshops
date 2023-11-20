import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { BalanceService } from '@codesign/rxjs/services';

@Pipe({
    name: 'appCurrency',
})
export class CodesignCurrencyPipe extends CurrencyPipe implements PipeTransform {
    constructor(private readonly _balanceService: BalanceService) {
        // TODO: Get locales from the logged in user
        super((navigator && navigator.language) || 'en', 'EUR');
    }

    transform(
        value: string | number,
        currencyCode?: string | undefined,
        display?: string | boolean | undefined,
        digitsInfo?: string | undefined,
        locale?: string | undefined
    ): string | null;
    transform(
        value: null | undefined,
        currencyCode?: string | undefined,
        display?: string | boolean | undefined,
        digitsInfo?: string | undefined,
        locale?: string | undefined
    ): null;
    transform(
        value: string | number | null | undefined,
        currencyCode?: string | undefined,
        display?: string | boolean | undefined,
        digitsInfo?: string | undefined,
        locale?: string | undefined
    ): string | null;
    transform(
        value: unknown,
        currencyCode?: unknown,
        display?: unknown,
        digitsInfo?: unknown,
        locale?: unknown
    ): string | null {
        if (typeof value !== 'string' || typeof value !== 'number') {
            throw new Error(
                'Value for the currency pipe has to be a type of string or number!'
            );
        }

        return super.transform(value, this._balanceService.currency, 'code', '1.2-2');
    }
}

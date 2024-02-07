import { Pipe, PipeTransform } from '@angular/core';
import { CompanyBalanceService } from '../services';

@Pipe({
    name: 'intlCurrency',
    standalone: true,
})
export class IntlCurrencyPipe implements PipeTransform {
    constructor(private readonly _companyBalanceService: CompanyBalanceService) {}

    transform(value: number): string {
        const balance = this._companyBalanceService.balance;

        if (!balance) {
            throw new Error('Company balance not found!');
        }

        // TODO: Get locales from the user
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            minimumFractionDigits: 2,
            currency: balance.currency,
        }).format(value);
    }
}

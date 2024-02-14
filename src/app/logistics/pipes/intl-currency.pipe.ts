import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'intlCurrency',
    standalone: true,
})
export class IntlCurrencyPipe implements PipeTransform {
    transform(value: number, currency: string): string {
        const locale = navigator.language || 'en-GB';

        // TODO: Remove `as any` after updating TypeScript
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            minimumFractionDigits: 2,
            currency: currency,
            currencyDisplay: 'code',
        } as any).format(value);
    }
}

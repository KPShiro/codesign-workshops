import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
    value: string;
    label: string;
}

@Component({
    selector: 'app-form-select',
    templateUrl: 'form-select.component.html',
    styleUrls: ['form-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormSelectComponent),
            multi: true,
        },
    ],
})
export class FormSelectComponent<T> implements ControlValueAccessor {
    value: SelectOption | null = null;

    @Input() options: SelectOption[] = [];

    onChange: (value: SelectOption | null) => void = () => {};
    onTouch: () => void = () => {};

    writeValue(value: SelectOption | null): void {
        this.value = value;
    }

    registerOnChange(fn: (value: SelectOption | null) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }
}

import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[appButton]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'app-button',
    },
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input()
    variant: 'neutral' | 'primary' | 'outlined' | 'text' = 'neutral';

    @Input()
    size: 'sm' | 'md' = 'md';
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    selector: 'app-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() type: ButtonType = 'button';
    @Input() variant: ButtonVariant = 'primary';

    @Input() disabled: boolean = false;

    @Input() icon?: string;
    @Input() text?: string;
}

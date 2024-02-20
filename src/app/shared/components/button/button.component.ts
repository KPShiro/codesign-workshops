import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'primary' | 'neutral' | 'inversed';
type ButtonVariant = 'filled' | 'semitransparent' | 'transparent';

@Component({
    selector: 'app-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() type: ButtonType = 'button';
    @Input() color: ButtonColor = 'primary';
    @Input() variant: ButtonVariant = 'filled';

    @Input() disabled: boolean = false;
    @Input() rounded: boolean = true;

    @Input() icon?: string;
    @Input() text?: string;
}

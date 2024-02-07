import { Component, EventEmitter, Input, Output } from '@angular/core';

export type IconPosition = 'before' | 'after';

@Component({
    selector: 'app-navbar-widget-button',
    templateUrl: 'navbar-widget-button.component.html',
    styleUrls: ['navbar-widget-button.component.scss'],
})
export class NavbarWidgetButtonComponent {
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;

    @Input() icon: string | null = null;
    @Input() iconPosition: IconPosition = 'before';

    @Input() text: string | null = 'Button';

    @Output() clicked: EventEmitter<void> = new EventEmitter();

    protected onButtonClicked(): void {
        if (this.disabled) {
            return;
        }

        this.clicked.emit();
    }
}

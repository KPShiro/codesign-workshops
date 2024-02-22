import { Component, EventEmitter, Input, Output } from '@angular/core';

export type IconPosition = 'before' | 'after';

@Component({
    selector: 'app-navbar-widget',
    templateUrl: 'navbar-widget.component.html',
})
export class NavbarWidgetComponent {
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() rounded: boolean = true;

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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconPosition } from '@codesign/logistics/components';

@Component({
    selector: 'app-navbar-widget',
    templateUrl: 'navbar-widget.component.html',
    styleUrls: ['navbar-widget.component.scss'],
})
export class NavbarWidgetComponent {
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() dropdown: boolean = false;

    @Input() icon: string | null = null;
    @Input() iconPosition: IconPosition = 'before';

    @Input() text: string | null = 'Navbar Widget';

    @Output() actionClicked = new EventEmitter<void>();
    @Output() dropdownClicked = new EventEmitter<void>();

    protected onPrimaryBtnClick(): void {
        if (this.disabled) {
            return;
        }

        this.actionClicked.emit();
    }

    protected onSecondaryBtnClick(): void {
        if (this.disabled) {
            return;
        }

        this.dropdownClicked.emit();
    }
}

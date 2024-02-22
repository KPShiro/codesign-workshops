import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu-option',
    templateUrl: 'menu-option.component.html',
})
export class MenuOptionComponent {
    @Input() disabled: boolean = false;
    @Input() selected: boolean = false;

    @Input() icon: string | null = null;
}

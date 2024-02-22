import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu-option',
    templateUrl: 'menu-option.component.html',
    styleUrls: ['menu-option.component.scss'],
})
export class MenuOptionComponent {
    @Input() disabled: boolean = false;
    @Input() selected: boolean = false;

    @Input() icon: string | null = null;
}

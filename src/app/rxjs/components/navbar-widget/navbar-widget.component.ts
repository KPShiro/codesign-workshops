import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navbar-widget',
    templateUrl: './navbar-widget.component.html',
    styleUrls: ['./navbar-widget.component.scss'],
})
export class NavbarWidgetComponent {
    @Input()
    disabled: boolean = false;

    @Input()
    loading: boolean = false;
}

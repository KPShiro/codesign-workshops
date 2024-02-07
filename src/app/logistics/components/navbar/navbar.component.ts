import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
    protected handleSettings(): void {
        alert('Settings');
    }

    protected handleUserAccount(): void {
        alert('User account');
    }

    protected handleMenu(): void {
        alert('Menu');
    }
}

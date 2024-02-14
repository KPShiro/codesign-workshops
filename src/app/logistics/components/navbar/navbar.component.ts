import { Component } from '@angular/core';
import { SignOutAction } from '@codesign/logistics/actions';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
    signOutAction = this._signOutAction.build<void>({
        resolveParams: () => ({}),
    });

    constructor(private readonly _signOutAction: SignOutAction) {}
}

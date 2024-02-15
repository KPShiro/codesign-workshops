import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignOutAction } from '@codesign/logistics/actions';

@Component({
    selector: 'app-navbar-menu',
    templateUrl: 'navbar-menu-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuWidgetComponent {
    signOutAction = inject(SignOutAction).build<void>({
        resolveParams: () => ({}),
    });
}

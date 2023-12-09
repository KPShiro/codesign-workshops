import { Component } from '@angular/core';
import { INavbarLinkGroup } from '@codesign/shared/components';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'app-navbar',
    },
})
export class NavbarComponent {
    navLinksGroups: INavbarLinkGroup[] = [
        {
            label: 'Introduction',
            children: [
                {
                    label: 'Getting started',
                    path: '/',
                },
            ],
        },
        {
            label: 'RxJS',
            children: [
                {
                    label: 'Introduction',
                    path: '/rxjs/introduction',
                },
                {
                    label: 'Subjects',
                    path: '/rxjs/subjects',
                },
            ],
        },
    ];
}

import { Component } from '@angular/core';

interface NavLink {
    title: string;
    path: string;
    children?: NavLink[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    navLinks: NavLink[] = [
        {
            title: 'RxJS',
            path: '/rxjs',
            children: [
                {
                    title: 'Introduction',
                    path: '/rxjs/introduction',
                },
                {
                    title: 'Exercise 0',
                    path: '/rxjs/exercise/0',
                },
            ],
        },
    ];

    isOpened(navbarLink: HTMLElement): boolean {
        return navbarLink.classList.contains('sidenav-item--active');
    }
}

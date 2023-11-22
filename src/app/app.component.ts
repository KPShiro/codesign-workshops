import { Component } from '@angular/core';
import { INavbarLink } from '@codesign/shared/components';

interface NavLinkGroup {
    label: string;
    children: INavbarLink[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    navLinksGroups: NavLinkGroup[] = [
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
                    children: [
                        {
                            label: 'Subject',
                            path: '/rxjs/subjects/subject',
                        },
                        {
                            label: 'ReplySubject',
                            path: '/rxjs/subjects/reply-subject',
                        },
                        {
                            label: 'BehaviorSubject',
                            path: '/rxjs/subjects/behavior-subject',
                        },
                        {
                            label: 'AsyncSubject',
                            path: '/rxjs/subjects/async-subject',
                        },
                    ],
                },
            ],
        },
    ];
}

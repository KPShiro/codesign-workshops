import { Component } from '@angular/core';
import { INavbarLinkGroup } from '@codesign/shared/components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    navLinksGroups: INavbarLinkGroup[] = [
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

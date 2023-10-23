import { Routes } from '@angular/router';

import { Exercise00ViewComponent, IntroductionViewComponent } from '@codesign/rxjs/views';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
    },
    {
        path: 'rxjs',
        data: {
            title: 'RxJS',
        },
        children: [
            {
                path: '',
                redirectTo: 'introduction',
                pathMatch: 'full',
            },
            {
                path: 'introduction',
                component: IntroductionViewComponent,
                data: {
                    title: 'Introduction',
                },
            },
            {
                path: 'execrise-0-0',
                component: Exercise00ViewComponent,
                data: {
                    title: 'Exercise 0.0',
                },
            },
        ],
    },
];

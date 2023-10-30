import { Routes } from '@angular/router';
import {
    Exercise00ViewComponent,
    Exercise01ViewComponent,
    IntroductionViewComponent,
} from './views';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full',
    },
    {
        path: 'introduction',
        component: IntroductionViewComponent,
    },
    {
        path: 'exercise',
        children: [
            {
                path: '0-0',
                component: Exercise00ViewComponent,
            },
            {
                path: '0-1',
                component: Exercise01ViewComponent,
            },
        ],
    },
];

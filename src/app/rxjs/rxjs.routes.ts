import { Routes } from '@angular/router';
import { Exercise0ViewComponent, IntroductionViewComponent } from './views';

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
                path: '0',
                component: Exercise0ViewComponent,
            },
        ],
    },
];

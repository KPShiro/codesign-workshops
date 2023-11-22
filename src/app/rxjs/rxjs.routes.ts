import { Routes } from '@angular/router';
import { SubjectsViewComponent, IntroductionViewComponent } from './views';

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
        path: 'subjects',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: SubjectsViewComponent,
            },
            {
                path: '**',
                redirectTo: '',
            },
        ],
    },
];

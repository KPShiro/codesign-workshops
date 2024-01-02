import { Routes } from '@angular/router';
import {
    Exercise0ViewComponent,
    Exercise1ViewComponent,
    ExerciseWrapperViewComponent,
} from './views';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'exercises',
        pathMatch: 'full',
    },
    {
        path: 'exercises',
        component: ExerciseWrapperViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'exercise-0',
                pathMatch: 'full',
            },
            {
                path: 'exercise-0',
                component: Exercise0ViewComponent,
            },
            {
                path: 'exercise-1',
                component: Exercise1ViewComponent,
            },
            {
                path: '**',
                redirectTo: 'exercise-0',
                pathMatch: 'full',
            },
        ],
    },
];

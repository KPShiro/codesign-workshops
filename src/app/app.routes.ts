import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
    },
    {
        path: 'rxjs',
        loadChildren: () =>
            import('@codesign/rxjs/rxjs.module').then(m => m.RxjsModule),
    },
];

import { Routes } from '@angular/router';

export enum AppRoute {
    RXJS = 'rxjs',
    LOGISTICS = 'logistics',
}

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoute.RXJS,
        pathMatch: 'full',
    },
    {
        path: AppRoute.RXJS,
        loadChildren: () =>
            import('@codesign/rxjs/rxjs.module').then(m => m.RxjsModule),
    },
    {
        path: AppRoute.LOGISTICS,
        loadChildren: () =>
            import('@codesign/logistics/logistics.module').then(m => m.LogisticsModule),
    },
    {
        path: '**',
        redirectTo: AppRoute.RXJS,
        pathMatch: 'full',
    },
];

import { Routes } from '@angular/router';
import { Feature } from './core/enums';
import { hasFeatureAccess } from './core/guards';
import { UnlockFeatureViewComponent } from './core/views';

export enum AppRoutes {
    UNLOCK_FEATURE = 'unlock-feature',
}

export const routes: Routes = [
    {
        path: '',
        redirectTo: Feature.LOGISTICS,
        pathMatch: 'full',
    },
    {
        path: Feature.RXJS,
        canActivate: [hasFeatureAccess],
        data: {
            feature: Feature.RXJS,
        },
        loadChildren: () =>
            import('@codesign/rxjs/rxjs.module').then(m => m.RxjsModule),
    },
    {
        path: Feature.LOGISTICS,
        canActivate: [hasFeatureAccess],
        data: {
            feature: Feature.LOGISTICS,
        },
        loadChildren: () =>
            import('@codesign/logistics/logistics.module').then(m => m.LogisticsModule),
    },
    {
        path: AppRoutes.UNLOCK_FEATURE,
        component: UnlockFeatureViewComponent,
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];

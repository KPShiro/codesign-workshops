import { Routes } from '@angular/router';
import { authenticated } from '@codesign/logistics/guards';
import {
    DashboardViewComponent,
    SignInViewComponent,
    WrapperViewComponent,
} from '@codesign/logistics/views';

export enum LogisticsRoutes {
    DASHBOARD = 'dashboard',
    COMPANY = 'company',
    COMPANY_BALANCE = 'company/balance',
    SIGN_IN = 'sign-in',
    PASSWORD = 'password',
}

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [authenticated],
        component: WrapperViewComponent,
        children: [
            {
                path: '',
                redirectTo: LogisticsRoutes.DASHBOARD,
                pathMatch: 'full',
            },
            {
                path: LogisticsRoutes.DASHBOARD,
                component: DashboardViewComponent,
            },
            {
                path: '**',
                redirectTo: LogisticsRoutes.DASHBOARD,
                pathMatch: 'full',
            },
        ],
    },
    {
        path: LogisticsRoutes.SIGN_IN,
        component: SignInViewComponent,
    },
];

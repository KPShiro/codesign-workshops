import { Routes } from '@angular/router';
import {
    DashboardViewComponent,
    WrapperViewComponent,
} from '@codesign/logistics/views';

export enum LogisticsRoutes {
    DASHBOARD = 'dashboard',
}

export const routes: Routes = [
    {
        path: '',
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
];

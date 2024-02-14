import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    CompanyListMenuComponent,
    NavbarBalanceWidgetComponent,
    NavbarCompanyWidgetComponent,
    NavbarComponent,
    NavbarWidgetComponent,
    RequestListItemComponent,
} from '@codesign/logistics/components';
import { routes } from '@codesign/logistics/logistics.routes';
import {
    ContainerSizePipe,
    ContainerTypePipe,
    IntlCurrencyPipe,
} from '@codesign/logistics/pipes';
import {
    DashboardViewComponent,
    SignInViewComponent,
    WrapperViewComponent,
} from '@codesign/logistics/views';
import { SharedModule } from '@codesign/shared/shared.module';

const materialCdkModules = [CdkMenuItem, CdkMenuTrigger, CdkMenu];

const components = [
    CompanyListMenuComponent,
    NavbarBalanceWidgetComponent,
    NavbarCompanyWidgetComponent,
    NavbarComponent,
    NavbarWidgetComponent,
    RequestListItemComponent,
];

const views = [DashboardViewComponent, WrapperViewComponent, SignInViewComponent];

const pipes = [ContainerSizePipe, ContainerTypePipe, IntlCurrencyPipe];

@NgModule({
    imports: [
        SharedModule,

        ...materialCdkModules,
        ...pipes,

        RouterModule.forChild(routes),
    ],
    declarations: [...views, ...components],
})
export class LogisticsModule {}

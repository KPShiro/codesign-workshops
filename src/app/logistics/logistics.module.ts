import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    NavbarBalanceWidgetComponent,
    NavbarCompanyWidgetComponent,
    NavbarComponent,
    NavbarWidgetButtonComponent,
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
    WrapperViewComponent,
} from '@codesign/logistics/views';
import { SharedModule } from '@codesign/shared/shared.module';

const components = [
    NavbarComponent,
    NavbarWidgetComponent,
    NavbarWidgetButtonComponent,
    NavbarBalanceWidgetComponent,
    NavbarCompanyWidgetComponent,
    RequestListItemComponent,
];

const views = [DashboardViewComponent, WrapperViewComponent];

const pipes = [ContainerSizePipe, ContainerTypePipe, IntlCurrencyPipe];

@NgModule({
    imports: [SharedModule, ...pipes, RouterModule.forChild(routes)],
    declarations: [...views, ...components],
})
export class LogisticsModule {}

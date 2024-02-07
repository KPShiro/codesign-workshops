import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestListItemComponent } from '@codesign/logistics/components';
import { routes } from '@codesign/logistics/logistics.routes';
import { ContainerSizePipe, ContainerTypePipe } from '@codesign/logistics/pipes';
import {
    DashboardViewComponent,
    WrapperViewComponent,
} from '@codesign/logistics/views';
import { SharedModule } from '@codesign/shared/shared.module';

const components = [RequestListItemComponent];
const pipes = [ContainerSizePipe, ContainerTypePipe];

@NgModule({
    imports: [SharedModule, ...components, ...pipes, RouterModule.forChild(routes)],
    declarations: [DashboardViewComponent, WrapperViewComponent],
})
export class LogisticsModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@codesign/shared/shared.module';
import { routes } from '@codesign/rxjs/rxjs.routes';
import { IntroductionViewComponent, SubjectsViewComponent } from '@codesign/rxjs/views';
import {
    BalanceRestService,
    BalanceStateService,
    CompanyRestService,
    CompanyStateService,
    LocationRestService,
    RequestRestService,
    UserRestService,
} from '@codesign/rxjs/services';
import {
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
    NavbarWidgetComponent,
} from '@codesign/rxjs/components';
import {
    RefreshBalanceCommand,
    SwitchCompanyCommand,
    TopUpCommand,
} from '@codesign/rxjs/commands';

const components = [
    NavbarWidgetComponent,
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
];

const views = [IntroductionViewComponent, SubjectsViewComponent];
const angularCdk = [CdkMenu, CdkMenuItem, CdkMenuTrigger];
const commands = [TopUpCommand, RefreshBalanceCommand, SwitchCompanyCommand];

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        ...angularCdk,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [...components, ...views],
    providers: [
        BalanceRestService,
        BalanceStateService,
        CompanyRestService,
        CompanyStateService,
        LocationRestService,
        RequestRestService,
        UserRestService,
        ...commands,
    ],
})
export class RxjsModule {
    constructor(private readonly _switchCompanyCommand: SwitchCompanyCommand) {
        this._switchCompanyCommand.execute({ companyId: '0' }).subscribe();
    }
}

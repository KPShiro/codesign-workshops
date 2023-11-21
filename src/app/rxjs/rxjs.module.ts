import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@codesign/shared/shared.module';
import { routes } from '@codesign/rxjs/rxjs.routes';
import {
    IntroductionViewComponent,
    Exercise0ViewComponent,
} from '@codesign/rxjs/views';
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
import { CodesignCurrencyPipe } from '@codesign/rxjs/pipes';

const components = [
    NavbarWidgetComponent,
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
];

const views = [IntroductionViewComponent, Exercise0ViewComponent];
const angularCdk = [CdkMenu, CdkMenuItem, CdkMenuTrigger];
const commands = [TopUpCommand, RefreshBalanceCommand, SwitchCompanyCommand];
const pipes = [CodesignCurrencyPipe];

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        ...angularCdk,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [...components, ...views, ...pipes],
    providers: [
        BalanceRestService,
        BalanceStateService,
        CompanyRestService,
        CompanyStateService,
        LocationRestService,
        RequestRestService,
        UserRestService,
        ...commands,
        ...pipes,
    ],
})
export class RxjsModule {
    constructor(private readonly _switchCompanyCommand: SwitchCompanyCommand) {
        this._switchCompanyCommand.execute({ companyId: '0' }).subscribe();
    }
}

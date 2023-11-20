import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

import { routes } from './rxjs.routes';

import { SharedModule } from '@codesign/shared/shared.module';
import {
    IntroductionViewComponent,
    Exercise0ViewComponent,
} from '@codesign/rxjs/views';
import {
    BalanceRestService,
    BalanceService,
    CompanyRestService,
    CompanyService,
    LocationRestService,
    RequestRestService,
    UserRestService,
} from '@codesign/rxjs/services';
import {
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
    NavbarWidgetComponent,
    TopUpDialogComponent,
} from '@codesign/rxjs/components';
import { PayCommand, TopUpCommand } from '@codesign/rxjs/commands';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
    NavbarWidgetComponent,
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
    TopUpDialogComponent,
];

const views = [IntroductionViewComponent, Exercise0ViewComponent];

const angularCdk = [CdkMenu, CdkMenuItem, CdkMenuTrigger];

const commands = [TopUpCommand, PayCommand];

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
        CompanyRestService,
        CompanyService,
        LocationRestService,
        RequestRestService,
        UserRestService,
        BalanceService,
        ...commands,
    ],
})
export class RxjsModule {
    constructor(private readonly _companyService: CompanyService) {
        this._companyService.switchCompany('0');
    }
}

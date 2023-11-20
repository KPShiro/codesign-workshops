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
} from '@codesign/rxjs/components';
import { TopUpCommand } from '@codesign/rxjs/commands';
import { CodesignCurrencyPipe } from './pipes';

const components = [
    NavbarWidgetComponent,
    BalanceWidgetComponent,
    CompanyWidgetComponent,
    NavbarComponent,
];

const views = [IntroductionViewComponent, Exercise0ViewComponent];
const angularCdk = [CdkMenu, CdkMenuItem, CdkMenuTrigger];
const commands = [TopUpCommand];
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
        CompanyRestService,
        CompanyService,
        LocationRestService,
        RequestRestService,
        UserRestService,
        BalanceService,
        ...commands,
        ...pipes,
    ],
})
export class RxjsModule {
    constructor(private readonly _companyService: CompanyService) {
        this._companyService.switchCompany('0');
    }
}

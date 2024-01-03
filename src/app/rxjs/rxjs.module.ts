import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from '@codesign/rxjs/rxjs.routes';
import {
    Exercise0ViewComponent,
    ExerciseWrapperViewComponent,
} from '@codesign/rxjs/views';
import { SharedModule } from '@codesign/shared/shared.module';

const angularCdkModules = [CdkMenu, CdkMenuItem, CdkMenuTrigger];

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,

        ...angularCdkModules,

        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [ExerciseWrapperViewComponent, Exercise0ViewComponent],
})
export class RxjsModule {}

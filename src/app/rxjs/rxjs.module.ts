import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@codesign/shared/shared.module';
import { routes } from '@codesign/rxjs/rxjs.routes';
import {
    Exercise0ViewComponent,
    Exercise1ViewComponent,
    ExerciseWrapperViewComponent,
} from '@codesign/rxjs/views';

const angularCdkModules = [CdkMenu, CdkMenuItem, CdkMenuTrigger];

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,

        ...angularCdkModules,

        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [
        ExerciseWrapperViewComponent,
        Exercise0ViewComponent,
        Exercise1ViewComponent,
    ],
})
export class RxjsModule {}

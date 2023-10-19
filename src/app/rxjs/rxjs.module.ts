import { NgModule } from '@angular/core';

import { SharedModule } from '@codesign/shared/shared.module';
import {
    IntroductionViewComponent,
    SubjectsViewComponent,
} from '@codesign/rxjs/views';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        IntroductionViewComponent,
        SubjectsViewComponent,
    ],
})
export class RxjsModule { }

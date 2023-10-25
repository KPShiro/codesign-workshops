import { NgModule } from '@angular/core';

import { SharedModule } from '@codesign/shared/shared.module';
import {
    IntroductionViewComponent,
    Exercise00ViewComponent,
    Exercise01ViewComponent,
} from '@codesign/rxjs/views';

@NgModule({
    imports: [SharedModule],
    declarations: [
        IntroductionViewComponent,
        Exercise00ViewComponent,
        Exercise01ViewComponent,
    ],
})
export class RxjsModule {}

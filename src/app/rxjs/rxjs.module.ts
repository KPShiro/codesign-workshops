import { NgModule } from '@angular/core';

import { SharedModule } from '@codesign/shared/shared.module';
import {
    IntroductionViewComponent,
    Exercise00ViewComponent,
    Exercise01ViewComponent,
} from '@codesign/rxjs/views';
import { RouterModule } from '@angular/router';
import { routes } from './rxjs.routes';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        IntroductionViewComponent,
        Exercise00ViewComponent,
        Exercise01ViewComponent,
    ],
})
export class RxjsModule {}

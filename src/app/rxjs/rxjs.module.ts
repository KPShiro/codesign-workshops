import { NgModule } from '@angular/core';

import { SharedModule } from '@codesign/shared/shared.module';
import { Exercise00ViewComponent, IntroductionViewComponent } from '@codesign/rxjs/views';

@NgModule({
    imports: [SharedModule],
    declarations: [Exercise00ViewComponent, IntroductionViewComponent],
})
export class RxjsModule {}

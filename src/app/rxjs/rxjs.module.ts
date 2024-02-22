import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@codesign/rxjs/rxjs.routes';
import {
    Exercise0ViewComponent,
    ExerciseWrapperViewComponent,
} from '@codesign/rxjs/views';
import { SharedModule } from '@codesign/shared/shared.module';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [ExerciseWrapperViewComponent, Exercise0ViewComponent],
})
export class RxjsModule {}

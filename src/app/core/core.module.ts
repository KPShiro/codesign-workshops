import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '@codesign/shared/shared.module';
import {
    IntroductionViewComponent,
    SubjectsViewComponent,
} from '@codesign/core/views';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        IntroductionViewComponent,
        SubjectsViewComponent,
    ],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule,
    ) {
        if (parentModule) {
            throw new Error(`${CoreModule.name} is already loaded. Import it in the main AppModule only.`);
        }
    }

    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                // Add your providers here...
            ],
        };
    }
}

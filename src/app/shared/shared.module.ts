import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    ButtonComponent,
    MatIconComponent,
    SpinnerComponent,
} from '@codesign/shared/components';

const modules: any = [CommonModule];
const components: any = [ButtonComponent, MatIconComponent, SpinnerComponent];

@NgModule({
    imports: [...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

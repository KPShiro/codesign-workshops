import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconComponent, SpinnerComponent } from '@codesign/shared/components';

const modules = [CommonModule];
const components = [MatIconComponent, SpinnerComponent];

@NgModule({
    imports: [RouterModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

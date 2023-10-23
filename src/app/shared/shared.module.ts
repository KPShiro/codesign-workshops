import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent, MatIconComponent } from '@codesign/shared/components';

const modules: any = [CommonModule, RouterModule];

const components: any = [ButtonComponent, MatIconComponent];

@NgModule({
    imports: [...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

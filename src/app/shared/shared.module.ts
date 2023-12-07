import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    ButtonComponent,
    MatIconComponent,
    NavbarLinkComponent,
    NavbarLinkGroupComponent,
    SpinnerComponent,
} from '@codesign/shared/components';

const modules = [CommonModule];
const components = [
    ButtonComponent,
    MatIconComponent,
    NavbarLinkComponent,
    NavbarLinkGroupComponent,
    SpinnerComponent,
];

@NgModule({
    imports: [RouterModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

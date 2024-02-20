import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    AvatarComponent,
    ButtonComponent,
    FormSelectComponent,
    MatIconComponent,
    MenuComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    MenuOptionComponent,
    MenuSeparatorComponent,
    SpinnerComponent,
} from '@codesign/shared/components';

const modules = [CommonModule, ReactiveFormsModule, FormsModule, RouterModule];
const components = [
    AvatarComponent,
    ButtonComponent,
    FormSelectComponent,
    MatIconComponent,
    MenuComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    MenuOptionComponent,
    MenuSeparatorComponent,
    SpinnerComponent,
];

@NgModule({
    imports: [...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

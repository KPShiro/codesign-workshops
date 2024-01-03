import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    FormSelectComponent,
    MatIconComponent,
    SpinnerComponent,
} from '@codesign/shared/components';

const modules = [CommonModule];
const components = [MatIconComponent, SpinnerComponent, FormSelectComponent];

@NgModule({
    imports: [RouterModule, ReactiveFormsModule, FormsModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}

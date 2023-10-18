import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PageLayoutViewComponent } from "@codesign/shared/views";

const modules = [
    CommonModule,
    RouterModule,
];

@NgModule({
    imports: [
        ...modules,
    ],
    exports: [
        ...modules,
    ],
    declarations: [
        PageLayoutViewComponent,
    ],
})
export class SharedModule { }

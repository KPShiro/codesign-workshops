import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const modules: any = [
    CommonModule,
    RouterModule,
];

const components: any = [];

@NgModule({
    imports: [
        ...modules,
    ],
    exports: [
        ...modules,
        ...components,
    ],
    declarations: [
        ...components,
    ],
})
export class SharedModule { }

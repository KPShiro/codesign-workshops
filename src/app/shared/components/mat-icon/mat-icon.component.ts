import { Component, HostBinding, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'mat-icon',
    template: `<span class="material-symbols">{{ icon }}</span>`,
    styleUrls: ['./mat-icon.component.scss'],
})
export class MatIconComponent {
    @Input()
    icon: string = 'help';

    @HostBinding('class')
    get hostCssClasses() {
        return `mat-icon`;
    }
}

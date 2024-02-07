import { Pipe, PipeTransform } from '@angular/core';

import { ContainerSize } from '@codesign/logistics/enums';

@Pipe({
    name: 'containerSize',
    standalone: true,
})
export class ContainerSizePipe implements PipeTransform {
    transform(value: ContainerSize | string): string {
        return `${value}ft`;
    }
}

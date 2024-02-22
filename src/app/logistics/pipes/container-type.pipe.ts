import { Pipe, PipeTransform } from '@angular/core';

import { containerTypeSet } from '@codesign/logistics/constants';
import { ContainerType } from '@codesign/logistics/enums';

@Pipe({
    name: 'containerType',
    standalone: true,
})
export class ContainerTypePipe implements PipeTransform {
    transform(value: ContainerType | string): string {
        const containerTypes = [...containerTypeSet].find(type => type.type === value);

        if (!containerTypes) {
            throw new Error(`Container type ${value} not found`);
        }

        return containerTypes.label;
    }
}

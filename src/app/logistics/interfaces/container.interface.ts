import { ContainerSize, ContainerType } from '@codesign/logistics/enums';

export interface IContainer {
    number: string;
    size: ContainerSize;
    type: ContainerType;
}

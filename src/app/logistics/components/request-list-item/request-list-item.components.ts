import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IRequest } from '@codesign/logistics/interfaces';
import { ContainerSizePipe, ContainerTypePipe } from '@codesign/logistics/pipes';

@Component({
    selector: 'app-request-list-item',
    templateUrl: 'request-list-item.components.html',
    styleUrls: ['request-list-item.components.scss'],
    imports: [CommonModule, ContainerSizePipe, ContainerTypePipe],
    standalone: true,
})
export class RequestListItemComponent {
    @Input({ required: true }) request!: IRequest;
}

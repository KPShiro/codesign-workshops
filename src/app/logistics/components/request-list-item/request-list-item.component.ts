import { Component, Input } from '@angular/core';
import { IRequest } from '@codesign/logistics/interfaces';

@Component({
    selector: 'app-request-list-item',
    templateUrl: 'request-list-item.component.html',
})
export class RequestListItemComponent {
    @Input({ required: true }) request!: IRequest;
}

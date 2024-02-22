import { Component, Input } from '@angular/core';
import { ErrorNotification } from '@codesign/core/services';

@Component({
    selector: 'app-error-notification',
    templateUrl: 'error-notification.component.html',
})
export class ErrorNotificationComponent {
    @Input({ required: true }) notification!: ErrorNotification;
}

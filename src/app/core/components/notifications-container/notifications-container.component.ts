import { Component } from '@angular/core';
import { NotificationService } from '@codesign/core/services';

@Component({
    selector: 'app-notifications-container',
    templateUrl: 'notifications-container.component.html',
})
export class NotificationsContainerComponent {
    get notifications() {
        return this._notificationService.notifications;
    }

    constructor(private readonly _notificationService: NotificationService) {}
}

import { Injectable } from '@angular/core';
import * as sharedHelpers from '@codesign/shared/helpers';

type NotificationType = 'message' | 'error';
type NotificationVariant = 'info' | 'success' | 'warning' | 'danger';

export interface MessageNotification {
    variant: NotificationVariant;
    title: string;
    message: string;
}

export interface ErrorNotification {
    error: string;
}

export type Notification = (MessageNotification | ErrorNotification) & {
    type: NotificationType;
};

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private _notifications: Map<string, Notification> = new Map([]);

    get notifications(): Notification[] {
        return [...this._notifications.values()];
    }

    showNotification(
        variant: NotificationVariant,
        title: string,
        message: string,
        timeout: number = 5000
    ): void {
        this._addNotification({ type: 'message', variant, title, message }, timeout);
    }

    showError(message: string): void {
        this._addNotification({ type: 'error', error: message }, 5000);
    }

    private _addNotification(notification: Notification, timeout: number): void {
        const id = sharedHelpers.generateGUID();

        this._notifications.set(id, notification);

        setTimeout(() => {
            this._notifications.delete(id);
        }, timeout);
    }
}

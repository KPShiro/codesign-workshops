import { ErrorHandler, Provider } from '@angular/core';
import { NotificationService } from '../services/notification.service';

export class DefaultErrorHandler implements ErrorHandler {
    constructor(private readonly _notificationService: NotificationService) {}

    // TODO: Implement a proper error handling
    handleError(error: Error): void {
        console.error('[ERROR]', error);
        this._notificationService.showError(error.message);
    }
}

export const ErrorHandlerProvider: Provider = {
    provide: ErrorHandler,
    useClass: DefaultErrorHandler,
    deps: [NotificationService],
};

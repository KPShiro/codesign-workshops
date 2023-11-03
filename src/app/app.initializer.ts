import { APP_INITIALIZER, Provider } from '@angular/core';

function appInitializerFactory() {
    return () => {};
}

export const appInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [],
    multi: true,
};

import { APP_INITIALIZER, Provider } from '@angular/core';
import { Feature } from '@codesign/core/enums';
import { FeatureAccessService } from '@codesign/core/services';

function appInitializerFactory(featureAccessService: FeatureAccessService) {
    return () => {
        const password = `codesign${new Date().getFullYear()}`;

        featureAccessService.registerFeature(Feature.RXJS, password);
        featureAccessService.registerFeature(Feature.LOGISTICS, password);
    };
}

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [FeatureAccessService],
    multi: true,
};

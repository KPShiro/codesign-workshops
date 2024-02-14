import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AppRoutes } from '@codesign/app.routes';
import { Feature } from '@codesign/core/enums';
import { FeatureAccessService } from '@codesign/core/services';

export const hasFeatureAccess: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    const router = inject(Router);
    const featureAccessService = inject(FeatureAccessService);

    if (featureAccessService.isFeatureUnlocked(next.data.feature as Feature)) {
        return true;
    }

    router.navigate(['/', AppRoutes.UNLOCK_FEATURE], {
        queryParams: { feature: next.data.feature },
    });
    return false;
};

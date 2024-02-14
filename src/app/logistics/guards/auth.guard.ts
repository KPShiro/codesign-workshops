import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { LogisticsRoutes } from '@codesign/logistics/logistics.routes';
import { UserAccountService } from '@codesign/logistics/services';
import { Observable, map } from 'rxjs';

export const authenticated: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean> => {
    const router = inject(Router);
    const userService = inject(UserAccountService);

    return userService.user$.pipe(
        map(user => {
            if (user) {
                return true;
            }

            router.navigate(['/', Feature.LOGISTICS, LogisticsRoutes.SIGN_IN], {
                queryParams: { returnUrl: state.url },
            });

            return false;
        })
    );
};

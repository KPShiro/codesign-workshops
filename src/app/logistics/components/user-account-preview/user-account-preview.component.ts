import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserAccountService } from '@codesign/logistics/services';
import { filterUndefined } from '@codesign/shared/helpers';
import { combineLatest, map } from 'rxjs';

@Component({
    selector: 'app-user-account-preview',
    templateUrl: 'user-account-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountPreviewComponent {
    vm$ = combineLatest([this._userAccountService.user$.pipe(filterUndefined())]).pipe(
        map(([user]) => ({
            user: { ...user, fullName: `${user.firstName} ${user.lastName}` },
        }))
    );

    constructor(private readonly _userAccountService: UserAccountService) {}
}

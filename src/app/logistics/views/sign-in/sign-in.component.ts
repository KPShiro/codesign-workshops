import { Component } from '@angular/core';
import { users } from '@codesign/logistics/mocks';
import { UserAccountService } from '@codesign/logistics/services';
import { combineLatest, map, of } from 'rxjs';

@Component({
    templateUrl: 'sign-in.component.html',
})
export class SignInViewComponent {
    vm$ = combineLatest([of(users), this._userAccountService.loading$]).pipe(
        map(([users, userLoading]) => ({
            users: users.map(u => ({
                ...u,
                fullName: `${u.firstName} ${u.lastName}`,
            })),
            loading: userLoading,
        }))
    );

    constructor(private readonly _userAccountService: UserAccountService) {}

    handleUserCardClick(id: string): void {
        this._userAccountService.switchUser(id);
    }
}

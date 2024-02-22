import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '@codesign/core/enums';
import { IUser } from '@codesign/logistics/interfaces';
import { users } from '@codesign/logistics/mocks';
import { getRandomNumber } from '@codesign/shared/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserAccountService {
    private _loading = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    private _storageKey: string = 'codesign.userId';

    get storageKey(): string {
        return this._storageKey;
    }

    get savedUserId(): string | null {
        return localStorage.getItem(this.storageKey) || null;
    }

    private _user = new BehaviorSubject<IUser | null>(
        this.savedUserId ? this._getUserById(this.savedUserId) : null
    );

    get user$(): Observable<IUser | null> {
        return this._user.asObservable();
    }

    get user(): IUser | null {
        return this._user.getValue();
    }

    constructor(private readonly _router: Router) {}

    switchUser(id: string): void {
        this._loading.next(true);

        const user = this._getUserById(id);

        if (!user) {
            throw new Error('User not found!');
        }

        setTimeout(
            () => {
                localStorage.setItem(this.storageKey, user.id);
                this._user.next(user);
                this._loading.next(false);
                this._router.navigate(['/', Feature.LOGISTICS]);
            },
            getRandomNumber(1000, 2000)
        );
    }

    clearData(): void {
        localStorage.removeItem(this.storageKey);
        this._user.next(null);
        this._loading.next(false);
    }

    private _getUserById(id: string): IUser | null {
        return users.find(u => u.id === id) || null;
    }
}

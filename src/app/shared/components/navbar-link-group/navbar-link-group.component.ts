import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarLink } from '@codesign/shared/components';
import { Subject, distinctUntilChanged, filter, map, takeUntil } from 'rxjs';

export interface INavbarLinkGroup {
    label: string;
    children: INavbarLink[];
}

@Component({
    selector: 'app-navbar-link-group',
    templateUrl: 'navbar-link-group.component.html',
    styleUrls: ['navbar-link-group.component.scss'],
})
export class NavbarLinkGroupComponent implements OnInit, OnDestroy {
    private _destroyed = new Subject<void>();
    private _isExpanded: boolean = false;

    @Input({ required: true })
    group!: INavbarLinkGroup;

    get isExpanded(): boolean {
        return this._isExpanded;
    }

    get hasActiveChild(): boolean {
        return this.group.children.some(child => this._router.url.includes(child.path));
    }

    constructor(private readonly _router: Router) {}

    ngOnInit(): void {
        this._router.events
            .pipe(
                map(() => this._router.url),
                distinctUntilChanged(),
                filter(() => this.hasActiveChild),
                takeUntil(this._destroyed)
            )
            .subscribe(() => {
                this._open();
            });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    toggle(): void {
        if (this.isExpanded) {
            this._close();
        } else {
            this._open();
        }
    }

    private _open(): void {
        this._isExpanded = true;
    }

    private _close(): void {
        this._isExpanded = false;
    }
}

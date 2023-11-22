import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, distinctUntilChanged, map, takeUntil } from 'rxjs';

export interface INavbarLink {
    label: string;
    path: string;
    children?: INavbarLink[];
}

@Component({
    selector: 'app-navbar-link',
    templateUrl: 'navbar-link.component.html',
    styleUrls: ['navbar-link.component.scss'],
})
export class NavbarLinkComponent implements OnInit, OnDestroy {
    private _destroyed = new Subject<void>();
    private _isExpanded = false;

    @Input({ required: true })
    link!: INavbarLink;

    get hasChildren(): boolean {
        return !!this.link.children && this.link.children.length > 0;
    }

    get isExpanded(): boolean {
        return this._isExpanded;
    }

    constructor(
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        if (!this.hasChildren) {
            return;
        }

        this._router.events
            .pipe(
                map(() => this._router.url),
                distinctUntilChanged(),
                takeUntil(this._destroyed)
            )
            .subscribe(url => {
                if (!url.includes(this.link.path)) {
                    this._close();
                } else {
                    this._open();
                }
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

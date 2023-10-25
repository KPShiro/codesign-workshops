import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface NavLink {
    title: string;
    path: string;
    children?: NavLink[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private _navLinks = new BehaviorSubject<NavLink[]>([]);

    get items$(): Observable<NavLink[]> {
        return this._navLinks.asObservable();
    }

    constructor(private readonly _router: Router) {}

    private _getRouteFullPath(route: Route, parent?: Route): string {
        return parent ? `${parent.path}/${route.path}` : route.path ?? '/';
    }

    private _mapRoute(route: Route, parent?: Route): NavLink {
        const navlink: NavLink = {
            title: route.data?.title ?? 'TITLE_MISSING',
            path: this._getRouteFullPath(route, parent),
        };

        if (!route.children) {
            return navlink;
        }

        return {
            ...navlink,
            children: this._getNavLinks(route.children, route),
        };
    }

    private _getNavLinks(routes: Routes, parent?: Route): NavLink[] {
        return routes
            .filter(route => !!route.data?.title)
            .map(route => this._mapRoute(route, parent));
    }

    ngOnInit(): void {
        this._navLinks.next(this._getNavLinks(this._router.config));
    }

    isOpened(navbarLink: HTMLElement): boolean {
        return navbarLink.classList.contains('sidenav-item--active');
    }
}

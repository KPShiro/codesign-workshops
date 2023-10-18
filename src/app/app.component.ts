import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    items = routes
        .filter((route) => !!route.component)
        .map((route) => this._mapRoute(route));

    private _mapRoute(route: Route): any {
        return {
            title: route.data?.title ?? route.path,
            path: route.path,
            children: route.children
                ?.filter((childRoute) => !!childRoute.component)
                .map((childRoute) => this._mapRoute(childRoute)),
            hasChildren: !!route.children?.length,
        };
    }

    isOpened(navbarLink: HTMLElement): boolean {
        return navbarLink.classList.contains('active');
    }

}

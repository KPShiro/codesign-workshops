import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'page-layout.component.html',
    styleUrls: ['page-layout.component.scss'],
})

export class PageLayoutViewComponent {

    private get _activeRoute() {
        return this._activatedRoute.snapshot.firstChild;
    }

    get title() {
        return this._activeRoute?.data?.title;
    }

    get description() {
        return this._activeRoute?.data?.description;
    }

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
    ) { }

}

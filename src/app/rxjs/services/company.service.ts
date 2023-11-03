import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, share, switchMap, tap } from 'rxjs';

import { CompanyRestService } from '@codesign/rxjs/services';
import { filterDefined } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class CompanyService {
    private _companyId = new BehaviorSubject<string | undefined>(undefined);
    private _loading = new BehaviorSubject<boolean>(false);

    loading$ = this._loading.asObservable().pipe(share());
    companyId$ = this._companyId.asObservable().pipe(share());

    company$ = this._companyId.pipe(
        filterDefined(),
        tap(() => this._loading.next(true)),
        switchMap(id =>
            this._companiesRestService
                .getOneById(id)
                .pipe(finalize(() => this._loading.next(false)))
        ),
        share()
    );

    companies$ = this._companyId.pipe(
        filterDefined(),
        tap(() => this._loading.next(true)),
        switchMap(() =>
            this._companiesRestService
                .getAll()
                .pipe(finalize(() => this._loading.next(false)))
        ),
        share()
    );

    constructor(private readonly _companiesRestService: CompanyRestService) {}

    switchCompany(id: string): void {
        this._companyId.next(id);
    }
}

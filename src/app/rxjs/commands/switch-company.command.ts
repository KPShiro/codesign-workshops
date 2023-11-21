import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, take, tap } from 'rxjs';

import { Command, RefreshBalanceCommand } from '@codesign/rxjs/commands';
import { CompanyRestService, CompanyStateService } from '@codesign/rxjs/services';
import { filterDefined } from '@codesign/rxjs/rxjs.helpers';

interface ISwitchCompanyCommandParams {
    companyId: string;
}

@Injectable()
export class SwitchCompanyCommand extends Command {
    constructor(
        private readonly _companyRestService: CompanyRestService,
        private readonly _companyStateService: CompanyStateService,
        private readonly _refreshBalanceCommand: RefreshBalanceCommand
    ) {
        super('refresh', 'Switch company');
    }

    execute(params: ISwitchCompanyCommandParams): Observable<void> {
        this._companyStateService.setProcessing(true);

        return this._companyRestService.getAll().pipe(
            take(1),
            map(response => response.data),
            tap(companies => {
                this._companyStateService.setLinkedCompanies(companies);
                this._companyStateService.setActiveCompany(params.companyId);
                this._companyStateService.setProcessing(false);
            }),
            map(() => this._companyStateService.activeCompany?.id),
            filterDefined(),
            switchMap(companyId => this._refreshBalanceCommand.execute({ companyId })),
            catchError(error => {
                this._companyStateService.setProcessing(false);
                console.error(error);

                return of(error);
            })
        );
    }
}

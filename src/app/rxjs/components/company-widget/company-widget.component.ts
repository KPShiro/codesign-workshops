import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { CompanyStateService } from '@codesign/rxjs/services';
import { SwitchCompanyCommand } from '@codesign/rxjs/commands';
import { ICompany } from '@codesign/rxjs/interfaces';

@Component({
    selector: 'app-company-widget',
    templateUrl: './company-widget.component.html',
    styleUrls: ['./company-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyWidgetComponent {
    viewModel$ = combineLatest([this._companyStateService.state$]).pipe(
        map(() => ({
            activeCompany: this._companyStateService.activeCompany,
            linkedCompanies: this._companyStateService.linkedCompanies,
            processing: this._companyStateService.processing,
        }))
    );

    switchCompanyAction = inject(SwitchCompanyCommand).build<ICompany>({
        resolveParams: company => ({ companyId: company.id }),
    });

    constructor(private readonly _companyStateService: CompanyStateService) {}
}

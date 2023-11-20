import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { CompanyService } from '@codesign/rxjs/services';

@Component({
    selector: 'app-company-widget',
    templateUrl: './company-widget.component.html',
    styleUrls: ['./company-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyWidgetComponent {
    viewModel$ = combineLatest([
        this._companyService.company$,
        this._companyService.companies$,
        this._companyService.processing$,
    ]).pipe(
        map(([company, companies, loading]) => ({
            company,
            companies,
            loading,
        }))
    );

    constructor(private readonly _companyService: CompanyService) {}

    switchCompany(id: string): void {
        this._companyService.switchCompany(id);
    }
}

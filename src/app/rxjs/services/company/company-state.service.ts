import { Injectable } from '@angular/core';
import { ICompany, ICompanyState } from '@codesign/rxjs/interfaces';
import { StateService } from '@codesign/rxjs/services';

@Injectable()
export class CompanyStateService extends StateService<ICompanyState> {
    get activeCompany(): ICompany | undefined {
        return this.state.activeCompany;
    }

    get linkedCompanies(): ICompany[] {
        return this.state.linkedCompanies;
    }

    get processing(): boolean {
        return this.state.processing;
    }

    constructor() {
        super({
            activeCompany: undefined,
            linkedCompanies: [],
            processing: false,
        });
    }

    setActiveCompany(id: string): void {
        const company = this.linkedCompanies.find(company => company.id === id);

        if (!company) {
            throw new Error('Company not found!');
        }

        this.updateState({ activeCompany: company });
    }

    setLinkedCompanies(companies: ICompany[]): void {
        this.updateState({ linkedCompanies: companies });
    }

    setProcessing(processing: boolean): void {
        this.updateState({ processing });
    }
}

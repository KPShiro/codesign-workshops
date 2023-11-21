import { ICompany } from '@codesign/rxjs/interfaces';

export interface ICompanyState {
    activeCompany: ICompany | undefined;
    linkedCompanies: ICompany[];
    processing: boolean;
}

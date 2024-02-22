import { ICompany, IUser } from '@codesign/logistics/interfaces';

export interface IRequestAuthor {
    user: Pick<IUser, 'id' | 'firstName' | 'lastName' | 'email'>;
    company: Pick<ICompany, 'id' | 'name'>;
}

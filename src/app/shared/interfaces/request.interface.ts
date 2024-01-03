import { Carrier, RequestStatus } from '@codesign/shared/enums';
import {
    ICompany,
    IContainer,
    IContainerDto,
    IPrice,
    IPriceDto,
    IUser,
} from '@codesign/shared/interfaces';

export interface IRequestDto {
    id: string;
    status: RequestStatus;
    carrier: Carrier;
    companyId: string;
    authorId: string;
    createdAt: number;
    plannedAt: number;
    price: IPriceDto;
    container: IContainerDto;
}

export interface IRequest {
    id: string;
    carrier: Carrier;
    company: Pick<ICompany, 'id' | 'name'>;
    author: Pick<IUser, 'id' | 'email' | 'firstName' | 'lastName'>;
    createdAt: number;
    plannedAt: number;
    price: IPrice;
    container: IContainer;
}

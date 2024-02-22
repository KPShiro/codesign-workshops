import { Carrier } from '@codesign/logistics/enums';
import {
    IContainer,
    ILocation,
    IRequestAuthor,
    IRequestPrice,
    IRequestStatus,
} from '@codesign/logistics/interfaces';

export interface IRequest {
    id: string;
    status: IRequestStatus;
    createdAt: number;
    reference: string | null;
    container: IContainer;
    author: IRequestAuthor;
    carrier: Carrier;
    price: IRequestPrice;
    origin: ILocation;
    destination: ILocation;
}

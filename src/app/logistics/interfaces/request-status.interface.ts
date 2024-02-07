import { RequestStatus } from '@codesign/logistics/enums';

export interface IRequestStatus {
    status: RequestStatus;
    name: string;
    description: string;
}

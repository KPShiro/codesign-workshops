import { MoveStatus, MoveType } from '@codesign/rxjs/enums';

export interface IMoveRequest {
    id: string;
    authorId: string;
    createdAt: number;
    updatedAt: number;
    status: MoveStatus;
    type: MoveType;
    date: number;
    originId: string;
    destinationId: string;
}

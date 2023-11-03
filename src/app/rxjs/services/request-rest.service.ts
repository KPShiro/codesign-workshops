import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IListApiResponse, IMoveRequest } from '@codesign/rxjs/interfaces';
import { MoveStatus, MoveType } from '@codesign/rxjs/enums';
import { randomizeDelay } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class RequestRestService {
    private readonly _data: IMoveRequest[] = [
        {
            id: '0',
            authorId: '0',
            createdAt: new Date('2023-10-30T00:00:00').getTime(),
            updatedAt: new Date('2023-10-30T00:02:00').getTime(),
            status: MoveStatus.APPROVED,
            type: MoveType.CHANGE_CONTAINERS_LOCATION,
            date: new Date('2023-11-01T00:00:00').getTime(),
            originId: '0',
            destinationId: '1',
        },
        {
            id: '1',
            authorId: '1',
            createdAt: new Date('2023-10-30T00:00:00').getTime(),
            updatedAt: new Date('2023-10-30T00:00:00').getTime(),
            status: MoveStatus.PENDING,
            type: MoveType.CHANGE_CONTAINERS_LOCATION,
            date: new Date('2023-11-01T00:00:00').getTime(),
            originId: '2',
            destinationId: '3',
        },
        {
            id: '2',
            authorId: '2',
            createdAt: new Date('2023-10-28T08:45:13').getTime(),
            updatedAt: new Date('2023-10-30T15:50:38').getTime(),
            status: MoveStatus.APPROVED,
            type: MoveType.CHANGE_CONTAINERS_LOCATION,
            date: new Date('2023-11-02T10:05:38').getTime(),
            originId: '3',
            destinationId: '2',
        },
    ];

    getAll(): Observable<IListApiResponse<IMoveRequest>> {
        const entities = [...this._data].sort((a, b) => a.createdAt - b.createdAt);

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getOneById(id: string): Observable<IMoveRequest> {
        const entity = this._data.find(c => c.id === id);

        if (entity === undefined) {
            throw new Error('Request not found');
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }
}

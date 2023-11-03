import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IListApiResponse, IUser } from '@codesign/rxjs/interfaces';
import { randomizeDelay } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class UserRestService {
    private readonly _data: IUser[] = [
        {
            id: '0',
            companyId: '0',
            name: 'Hermione Granger',
            email: 'hermione.granger@warner-bros.com',
            role: 'admin',
        },
        {
            id: '1',
            companyId: '0',
            name: 'Harry Potter',
            email: 'harry.potter@warner-bros.com',
            role: 'user',
        },
        {
            id: '2',
            companyId: '1',
            name: 'Peter Parker',
            email: 'peter.parker@avengers.com',
            role: 'admin',
        },
        {
            id: '3',
            companyId: '1',
            name: 'Tony Start',
            email: 'tony.stark@avengers.com',
            role: 'user',
        },
    ];

    getAll(): Observable<IListApiResponse<IUser>> {
        const entities = [...this._data].sort((a, b) => a.name.localeCompare(b.name));

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getAllByCompanyId(id: string): Observable<IListApiResponse<IUser>> {
        const entities = this._data.filter(c => c.companyId === id);

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getOneById(id: string): Observable<IUser> {
        const entity = this._data.find(c => c.id === id);

        if (entity === undefined) {
            throw new Error('User not found');
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }
}

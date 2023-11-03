import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ICompany, IListApiResponse } from '@codesign/rxjs/interfaces';
import { randomizeDelay } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class CompanyRestService {
    private readonly _data: ICompany[] = [
        {
            id: '0',
            name: 'Warner Brothers Ltd.',
            erpCode: 'CM0000',
            email: 'contact@warner-bros.com',
        },
        {
            id: '1',
            name: 'Avengers Inc.',
            erpCode: 'CM0001',
            email: 'contact@avengers.com',
        },
    ];

    getAll(): Observable<IListApiResponse<ICompany>> {
        const entities = [...this._data].sort((a, b) => a.name.localeCompare(b.name));

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getOneById(id: string): Observable<ICompany> {
        const entity = this._data.find(c => c.id === id);

        if (entity === undefined) {
            throw new Error(`Company not found`);
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }
}

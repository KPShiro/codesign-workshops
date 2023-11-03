import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IListApiResponse, ILocation } from '@codesign/rxjs/interfaces';
import { randomizeDelay } from '@codesign/rxjs/rxjs.helpers';

@Injectable()
export class LocationRestService {
    private readonly _data: ILocation[] = [
        {
            id: '0',
            country: 'Belgium',
            city: 'Antwerp',
            address: 'Lotteriestraat 1',
        },

        {
            id: '1',
            country: 'Belgium',
            city: 'Brussels',
            address: 'Asmuenberg 124',
        },
        {
            id: '2',
            country: 'Poland',
            city: 'Gdańsk',
            address: 'ul. Garbarska 21/1',
        },
        {
            id: '3',
            country: 'Poland',
            city: 'Kraków',
            address: 'ul. Przeładunkowa 182',
        },
    ];

    getAll(
        sortBy: keyof ILocation = 'address'
    ): Observable<IListApiResponse<ILocation>> {
        const entities = [...this._data].sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy])
        );

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getAllByCountry(country: string): Observable<IListApiResponse<ILocation>> {
        const entities = [...this._data].filter(c => c.country === country);

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getAllByCity(city: string): Observable<IListApiResponse<ILocation>> {
        const entities = [...this._data].filter(c => c.city === city);

        return of({ data: entities }).pipe(delay(randomizeDelay()));
    }

    getOneById(id: string): Observable<ILocation> {
        const entity = this._data.find(c => c.id === id);

        if (entity === undefined) {
            throw new Error(`Location not found`);
        }

        return of({ ...entity }).pipe(delay(randomizeDelay()));
    }
}

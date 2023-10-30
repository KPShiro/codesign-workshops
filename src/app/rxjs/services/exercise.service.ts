import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    Subject,
    finalize,
    of,
    switchMap,
    tap,
} from 'rxjs';

@Injectable()
export class ExerciseService {
    private _execute$ = new Subject<void>();
    private _executing$ = new BehaviorSubject<boolean>(false);

    executing$ = this._executing$.asObservable();

    onExecute$?: Observable<any>;

    output$ = this._execute$.pipe(
        tap(() => this._executing$.next(true)),
        switchMap(() =>
            (this.onExecute$ ?? of(null)).pipe(
                finalize(() => this._executing$.next(false))
            )
        )
    );

    execute(): void {
        this._execute$.next();
    }
}

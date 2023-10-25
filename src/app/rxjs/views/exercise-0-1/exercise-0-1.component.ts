import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, concatMap, delay, of, switchMap } from 'rxjs';

@Component({
    selector: 'app-exercise-0-1',
    templateUrl: 'exercise-0-1.component.html',
    styleUrls: ['exercise-0-1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise01ViewComponent {
    private _execute$ = new Subject<void>();
    private _data: number[] = [1, 2, 3, 4, 5];

    // ------------ EXERCISE ------------
    private _source$ = of(...this._data);
    // ------------ EXERCISE ------------

    output$ = this._execute$.pipe(
        switchMap(() =>
            this._source$.pipe(concatMap(item => of(item).pipe(delay(500))))
        )
    );

    execute(): void {
        this._execute$.next();
    }
}

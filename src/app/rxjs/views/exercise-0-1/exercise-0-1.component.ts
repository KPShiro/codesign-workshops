import { ChangeDetectionStrategy, Component } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
    selector: 'app-exercise-0-1',
    templateUrl: 'exercise-0-1.component.html',
    styleUrls: ['exercise-0-1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise01ViewComponent {
    private _data: number[] = [1, 2, 3, 4, 5];
    private _delay: number = 1000;

    // ------------ EXERCISE ------------
    private _source$ = of(this._data);
    // ------------ EXERCISE ------------

    output$ = this._source$.pipe(concatMap(item => of(item).pipe(delay(this._delay))));
}

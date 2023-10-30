import { ChangeDetectionStrategy, Component } from '@angular/core';
import { concatMap, delay, of } from 'rxjs';

@Component({
    selector: 'app-exercise-0-1',
    templateUrl: 'exercise-0-1.component.html',
    styleUrls: ['exercise-0-1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'exercise-page-wrapper',
    },
})
export class Exercise01ViewComponent {
    // ------------ EXERCISE ------------
    private _data$ = of([1, 2, 3, 4, 5]);
    // ------------ EXERCISE ------------

    output$ = this._data$.pipe(concatMap(item => of(item).pipe(delay(500))));
}

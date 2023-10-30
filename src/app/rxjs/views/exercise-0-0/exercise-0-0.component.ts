import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
    selector: 'app-exercise-0-0',
    templateUrl: 'exercise-0-0.component.html',
    styleUrls: ['exercise-0-0.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'exercise-page-wrapper',
    },
})
export class Exercise00ViewComponent {
    output$ = timer(0, 1000).pipe(map(() => this._getDateTimeString()));

    private _getDateTimeString(): string {
        return new Date().toLocaleString();
    }
}

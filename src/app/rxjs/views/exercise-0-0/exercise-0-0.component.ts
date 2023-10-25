import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-exercise-0-0',
    templateUrl: 'exercise-0-0.component.html',
    styleUrls: ['exercise-0-0.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise00ViewComponent {
    // ------------ EXERCISE ------------
    data = this._getDateTimeString();
    // ------------ EXERCISE ------------

    private _getDateTimeString(): string {
        return new Date().toLocaleString();
    }
}

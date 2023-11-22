import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: 'subjects.component.html',
    styleUrls: ['subjects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsViewComponent {}

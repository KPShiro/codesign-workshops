import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type SpinnerSize = 'sm' | 'md';
type SpinnerColor = 'primary' | 'neutral' | 'inversed';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
    @Input() size: SpinnerSize = 'md';
    @Input() color: SpinnerColor = 'primary';
}

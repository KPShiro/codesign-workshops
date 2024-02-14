import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getInitials } from '@codesign/logistics/helpers';

@Component({
    selector: 'app-avatar',
    templateUrl: 'avatar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
    @Input() icon: string = 'person';
    @Input() name: string | null = null;

    get initials(): string | null {
        if (!this.name) {
            return null;
        }

        return getInitials(this.name);
    }
}

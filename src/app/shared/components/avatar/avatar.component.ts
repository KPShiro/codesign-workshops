import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getInitials } from '@codesign/logistics/helpers';

type AvatarColor = 'primary' | 'neutral' | 'inversed';
type AvatarVariant = 'filled' | 'semitransparent';

@Component({
    selector: 'app-avatar',
    templateUrl: 'avatar.component.html',
    styleUrls: ['avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
    @Input() icon: string | null = null;
    @Input() name: string | null = null;
    @Input() color: AvatarColor = 'primary';
    @Input() variant: AvatarVariant = 'filled';

    get initials(): string | null {
        if (!this.name) {
            return null;
        }

        return getInitials(this.name);
    }
}

import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-user-story',
    templateUrl: './user-story.component.html',
    styleUrls: ['./user-story.component.scss'],
})
export class UserStoryComponent {
    @ContentChild('title', { read: TemplateRef<any> })
    title?: TemplateRef<any>;

    @ContentChild('actions', { read: TemplateRef<any> })
    actions?: TemplateRef<any>;

    @ContentChild('description', { read: TemplateRef<any> })
    description?: TemplateRef<any>;

    @ContentChild('acceptanceCriteria', { read: TemplateRef<any> })
    acceptanceCriteria?: TemplateRef<any>;
}

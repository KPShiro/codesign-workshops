import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    groups = [
        {
            label: 'RxJS',
            links: [
                {
                    path: '/rxjs/exercises/exercise-0',
                    label: 'Exercise 0',
                },
                {
                    path: '/rxjs/exercises/exercise-1',
                    label: 'Exercise 1',
                },
                {
                    path: '/rxjs/exercises/exercise-2',
                    label: 'Exercise 2',
                },
            ],
        },
    ];
}

import { Routes } from "@angular/router";

import { IntroductionViewComponent, SubjectsViewComponent } from "@codesign/rxjs/views";
import { PageLayoutViewComponent } from "@codesign/shared/views";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
    },
    {
        path: 'rxjs',
        component: PageLayoutViewComponent,
        data: {
            title: 'RXJS',
        },
        children: [
            {
                path: '',
                redirectTo: 'introduction',
                pathMatch: 'full',
            },
            {
                path: 'introduction',
                component: IntroductionViewComponent,
                data: {
                    title: 'Introduction',
                    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque iusto ratione repudiandae dolorum consequatur sapiente, architecto facere amet? Voluptatem delectus illo eaque distinctio saepe architecto deleniti ut harum.`,
                },
            },
            {
                path: 'subjects',
                component: SubjectsViewComponent,
                data: {
                    title: 'Subjects',
                    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque iusto ratione repudiandae dolorum consequatur sapiente, architecto facere amet? Voluptatem delectus illo eaque distinctio saepe architecto deleniti ut harum.`,
                },
            },
        ],
    },
];

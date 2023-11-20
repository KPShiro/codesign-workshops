import { Observable } from 'rxjs';

export interface ICommand<T = any> {
    processing$: Observable<boolean>;

    icon: string;
    text: string;

    execute(params?: T): void;
    undo(params?: T): void;
}

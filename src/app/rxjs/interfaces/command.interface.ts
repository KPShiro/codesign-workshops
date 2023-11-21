import { Observable } from 'rxjs';

export interface ICommand<TParams = any> {
    icon: string;
    label: string;

    execute(params?: TParams): Observable<void> | void;
}

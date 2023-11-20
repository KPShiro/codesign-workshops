import { Observable } from 'rxjs';

export interface ICommand<TParams> {
    icon: string;
    label: string;

    execute(params?: TParams): Observable<void> | void;
}

import { Observable, filter } from 'rxjs';

function isDefined<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined && value !== '';
}

export function filterUndefined<T>() {
    return (source$: Observable<T | null | undefined>) =>
        source$.pipe(filter(isDefined));
}

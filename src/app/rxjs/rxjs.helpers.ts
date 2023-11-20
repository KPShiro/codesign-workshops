import { Observable, filter } from 'rxjs';
import { ICommand } from './interfaces';

function isDefined<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

export function filterDefined<T>() {
    return (source$: Observable<T | null | undefined>) =>
        source$.pipe(filter(isDefined));
}

export function randomizeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeDelay(): number {
    return randomizeNumber(100, 1000);
}

export function createAction<T = any>(command: ICommand, execute: (actor: T) => void) {
    return {
        icon: command.icon,
        text: command.text,
        processing$: command.processing$,
        execute,
    };
}

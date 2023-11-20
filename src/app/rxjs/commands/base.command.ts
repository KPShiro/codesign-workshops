import { ICommand } from '@codesign/rxjs/interfaces';
import { BehaviorSubject, Observable, finalize, take } from 'rxjs';

export abstract class Command implements ICommand {
    private _processing = new BehaviorSubject<boolean>(false);

    protected _icon: string;
    protected _text: string;

    get processing$(): Observable<boolean> {
        return this._processing.asObservable();
    }

    get icon(): string {
        return this._icon;
    }

    get text(): string {
        return this._text;
    }

    constructor(icon: string, text: string) {
        this._icon = icon;
        this._text = text;
    }

    abstract execute(params?: any): void;
    abstract undo(params?: any): void;

    protected _performAsyncAction(config: {
        observable: Observable<any>;
        onComplete?: () => void;
    }) {
        if (this._processing.getValue()) {
            return;
        }

        this._processing.next(true);

        config.observable
            .pipe(
                take(1),
                finalize(() => {
                    this._processing.next(false);
                    config.onComplete?.();
                })
            )
            .subscribe();
    }
}

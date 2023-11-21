import { ICommand, ICommandBuildConfig, IUIAction } from '@codesign/rxjs/interfaces';
import { BehaviorSubject, Observable, finalize, isObservable, take } from 'rxjs';

export abstract class Command<TParams = any> implements ICommand<TParams> {
    private _processing = new BehaviorSubject<boolean>(false);

    protected _icon: string;
    protected _label: string;

    get icon(): string {
        return this._icon;
    }

    get label(): string {
        return this._label;
    }

    constructor(icon: string, label: string) {
        this._icon = icon;
        this._label = label;
    }

    abstract execute(params?: TParams): Observable<void> | void;

    build<TEntity>(config: ICommandBuildConfig<TEntity, TParams>): IUIAction<TEntity> {
        return {
            icon: config.icon ?? this.icon,
            label: config.label ?? this.label,
            hidden: (entity: TEntity) => config.hidden?.(entity) || false,
            disabled: (entity: TEntity) => config.disabled?.(entity) || false,
            processing: () => this._processing.getValue() || false,
            execute: (entity: TEntity) => {
                const params = config.resolveParams(entity);
                const result = this.execute(params);

                if (this._processing.getValue()) {
                    return;
                }

                if (isObservable(result)) {
                    this._processing.next(true);

                    result
                        .pipe(
                            take(1),
                            finalize(() => this._processing.next(false))
                        )
                        .subscribe({
                            next: () => config.onSuccess?.(),
                            error: () => config.onError?.(),
                        });
                } else {
                    config.onSuccess?.();
                }
            },
        };
    }
}

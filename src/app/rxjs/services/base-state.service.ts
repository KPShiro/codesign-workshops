import { BehaviorSubject } from 'rxjs';

export abstract class StateService<TState = any> {
    private _initialState!: TState;
    private _state!: BehaviorSubject<TState>;

    get state$() {
        return this._state.asObservable();
    }

    get state(): TState {
        return this._state.getValue();
    }

    constructor(initialState: any) {
        this._state = new BehaviorSubject<TState>(initialState);
        this._initialState = initialState;
    }

    protected setState(state: TState) {
        this._state.next(state);
    }

    protected resetState() {
        this._state.next(this._initialState);
    }

    protected updateState(update: Partial<TState>) {
        this._state.next({
            ...this._state.getValue(),
            ...update,
        });
    }
}

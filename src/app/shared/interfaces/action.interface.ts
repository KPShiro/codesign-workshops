export interface IAction<TEntity> {
    icon: string;
    label: string;
    hidden: (entity: TEntity) => boolean;
    disabled: (entity: TEntity) => boolean;
    processing: () => boolean;
    execute: (entity: TEntity) => void;
}

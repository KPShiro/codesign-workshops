export interface IUIAction<TEntity> {
    icon: string;
    label: string;
    hidden: (entity: TEntity) => boolean;
    disabled: (entity: TEntity) => boolean;
    processing: (entity: TEntity) => boolean;
    execute: (entity: TEntity) => void;
}

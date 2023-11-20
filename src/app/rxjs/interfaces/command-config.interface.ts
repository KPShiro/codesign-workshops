export interface ICommandBuildConfig<TEntity, TParams> {
    icon?: string;
    label?: string;
    resolveParams: (entity: TEntity) => TParams;
    hidden?: (entity: TEntity) => boolean;
    disabled?: (entity: TEntity) => boolean;
    onSuccess?: () => void;
    onError?: () => void;
}

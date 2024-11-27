export interface IAdapter<Entity, Model> {
    convertEntityToModelArray(entity: Entity[]): Model[];
    convertEntityToModel(entity: Entity): Model;
    convertModelToEntity(entity: Model): Entity;
}

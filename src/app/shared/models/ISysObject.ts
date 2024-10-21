export interface SysObject {
    name: string;
    objectId: number;
    schemaId: number;
    principalId: number;
    parentObjectId: number;
    type: string;
    typeDesc: string;
    createDate: Date;
    modifyDate: Date;
    isMsShipped: number;
    isSchemaPublished: boolean;
}

export interface SysColumn {
    id: number;
    name: string;
}

import { IAdapter } from "@adapters/IAdapter";
import { DiagnosticEntity } from "@entities/IDiagnosticEntity";
import { Diagnostic } from "@models//IDiagnostic";

export class DiagnosticAdapter implements IAdapter<DiagnosticEntity, Diagnostic> {
    convertEntityToModelArray(entity: DiagnosticEntity[]): Diagnostic[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: DiagnosticEntity): Diagnostic {
        return {
            code: entity.id,
            capsule: entity.capsuleId,
            analysis: entity.analysis,
            recommendations: entity.recommendations,
            created: entity.createdAt
        };
    }

    convertModelToEntity(model: Diagnostic): DiagnosticEntity {
        return {
            id: model.code,
            capsuleId: model.capsule,
            analysis: model.analysis,
            recommendations: model.recommendations,
            createdAt: model.created
        };
    }
}

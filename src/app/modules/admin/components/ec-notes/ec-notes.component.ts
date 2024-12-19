import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";
import { MatFormFieldModule, MatSuffix } from "@angular/material/form-field";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { TextFieldModule } from "@angular/cdk/text-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { QuillEditorComponent } from "ngx-quill";
import { TranslocoPipe, TRANSLOCO_SCOPE } from "@jsverse/transloco";
import { RouterLink } from "@angular/router";

@Component({
    selector: "ec-notes",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatSuffix,
        MatInputModule,
        MatButtonModule,
        RouterLink,
        TextFieldModule,
        ReactiveFormsModule,
        FormsModule,
        QuillEditorComponent,
        MatSuffix
    ],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <div class="flex justify-between items-center pb-2">
                <h2 class="text-lg font-semibold">Diagnostico del Doctor</h2>
                <span class="text-sm text-gray-500">{{ currentDate }}</span>
            </div>
            <form class="flex flex-col flex-auto mb-4 mt-2">
                <quill-editor
                    class="quill-editor-scroll max-h-52 overflow-y-auto"
                    [bounds]="'self'"
                    [modules]="quillModules"
                    [placeholder]="'Ingrese su diagnóstico aqui'"></quill-editor>
            </form>
            <div class="flex justify-between items-center">
                <button mat-button class="flex items-center bg-primary text-white">
                    Guardar Diagnostico
                    <mat-icon class="text-white pr-2" matSuffix [svgIcon]="'heroicons_solid:pencil-square'"></mat-icon>
                </button>
                <button [routerLink]="'/tiempo-real/reporte'" mat-button class="flex items-center bg-primary text-white px-4 py-2 rounded-full">
                    <div class="flex items-center space-x-2">
                        <span>Reporte médico</span>
                        <mat-icon class="text-white" matSuffix [svgIcon]="'heroicons_solid:arrow-right'"></mat-icon>
                    </div>
                </button>
            </div>
        </div>
    `,
    styleUrls: ["./ec-notes.component.scss"],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-notes", alias: "notes" }
        }
    ]
})
export class EcNotesComponent {
    formFieldHelpers: string[] = [""];
    quillModules: any = {
        toolbar: [["bold", "italic", "underline"], [{ align: [] }, { list: "ordered" }, { list: "bullet" }], ["clean"]]
    };
    @Input() currentDate: string = new Date().toLocaleDateString();

    /**
     * Get the form field helpers as string
     */
    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(" ");
    }
}

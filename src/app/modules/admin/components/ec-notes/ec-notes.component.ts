import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";
import { MatFormFieldModule, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { TextFieldModule } from "@angular/cdk/text-field";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { QuillEditorComponent } from "ngx-quill";
import { TranslocoPipe, TRANSLOCO_SCOPE } from "@jsverse/transloco";

@Component({
    selector: "ec-notes",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormFieldModule,
        MatIcon,
        MatSuffix,
        MatInputModule,
        MatButtonModule,
        TextFieldModule,
        ReactiveFormsModule,
        FormsModule,
        NgClass,
        QuillEditorComponent,
        TranslocoPipe
    ],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <div class="flex justify-between items-center pb-2">
                <h2 class="text-lg font-semibold">{{ "notes.title" | transloco }}</h2>
                <span class="text-sm text-gray-500">{{ currentDate }}</span>
            </div>
            <form class="flex flex-col flex-auto mb-4 mt-2">
                <quill-editor
                    class="quill-editor-scroll max-h-52 overflow-y-auto"
                    [bounds]="'self'"
                    [modules]="quillModules"
                    [placeholder]="'notes.placeholder' | transloco"></quill-editor>
            </form>
            <div class="flex justify-between items-center">
                <button mat-button class="flex items-center bg-primary text-white">
                    {{ "notes.save_button" | transloco }}
                    <mat-icon class="text-white pr-2" matSuffix [svgIcon]="'heroicons_solid:pencil-square'"></mat-icon>
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

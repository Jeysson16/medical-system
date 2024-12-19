import { CdkScrollable } from "@angular/cdk/scrolling";
import { NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "compact",
    templateUrl: "./compact.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CdkScrollable, NgIf, NgFor]
})
export class CompactComponent {
    patient = {
        dni: "70050600900",
        gender: "Femenino",
        name: "Alejos Mendoza Lindora",
        email: "anto_alejos@gmail.com",
        age: 22,
        phone: "989-123-456"
    };

    doctor = {
        name: "Sánchez Rodríguez, Jeysson Manuel",
        specialty: "Gastroenterología",
        signature: "/assets/images/ui/components/firma.jpg" // Path for the signature image
    };

    diagnosis = {
        title: "Diagnóstico de Gastritis Crónica",
        description: "El paciente presenta signos de gastritis crónica con erosiones en la mucosa gástrica.",
        details: `
            Durante el estudio, se observaron áreas con enrojecimiento significativo y pequeñas erosiones en las paredes del estómago. 
            Se recomienda realizar biopsia para descartar posibles infecciones por H. pylori y ajustar el tratamiento según los resultados.
        `,
        anomalies: [
            {
                name: "Erosión en el estómago",
                location: "Pared gástrica inferior",
                severity: "Moderado",
                image: "/assets/images/ui/components/placeholder50.jpg"
            },
            {
                name: "Inflamación del esófago",
                location: "Esófago medio",
                severity: "Leve",
                image: "/assets/images/ui/components/placeholder40.jpg"
            }
        ]
    };

    capsuleJourney = {
        startDate: "2024-01-23",
        capturedImages: 38,
        highlights: [
            {
                step: "Esófago",
                description: "Zona inflamada detectada.",
                image: "/assets/images/ui/components/placeholder36.jpg"
            },
            {
                step: "Estómago",
                description: "Erosión detectada en la mucosa.",
                image: "/assets/images/ui/components/placeholder49.jpg"
            }
        ]
    };

    reportDate = new Date().toISOString().split("T")[0]; // Today's date
    printDate = "15/11/2024";

    recommendations = [
        "Evitar alimentos irritantes como café, alcohol y alimentos picantes.",
        "Administrar inhibidores de la bomba de protones (IBP) según indicación médica.",
        "Programar seguimiento en 4 semanas."
    ];

    printReport() {
        window.print();
    }
}

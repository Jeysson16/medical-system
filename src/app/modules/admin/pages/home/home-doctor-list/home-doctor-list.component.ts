import { NgFor, DecimalPipe, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input, SimpleChanges } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Capsule } from "@models/ICapsule";
import { Chart, registerables } from "chart.js";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
    selector: "ui-home-doctor-list",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatIconModule, MatMenuModule, MatButtonToggleModule, NgApexchartsModule, MatTooltipModule, NgFor],
    templateUrl: "./home-doctor-list.component.html",
    styleUrl: "./home-doctor-list.component.scss"
})
export class HomeDoctorListComponent {
    @Input() capsules: Capsule[];

    doctor = {
        name: "Dra. Ana López",
        specialty: "Gastroenteróloga"
    };

    patientsToday = 4;
    newPatients = 40;
    newPatientsChange = 51;
    diagnosesThisMonth = 64;
    diagnosesChange = -20;
    pendingAppointments = 3;
    criticalCases = 1;
    resultsToReview = 5;
    information = {
        hospitalName: "Hospital Regional",
        contact: "956 184 530",
        address: "Calle Salud, No. 103, La Esperanza"
    };

    upcomingAppointments = [
        {
            patientName: "Stacy Mitchell",
            time: "9:15 AM",
            reason: "Visita semanal"
        },
        {
            patientName: "Amy Dunham",
            time: "9:30 AM",
            reason: "Chequeo de rutina"
        },
        {
            patientName: "Demi Joan",
            time: "9:50 AM",
            reason: "Reporte de laboratorio"
        },
        {
            patientName: "Susan Myers",
            time: "10:15 AM",
            reason: "Consulta inicial"
        }
    ];

    patients = [
        {
            name: "Denzel White",
            lastVisit: "2024-11-15",
            observation: "Fiebre y dolor de estómago",
            prescription: "Paracetamol 2 veces al día"
        },
        {
            name: "Maria Gomez",
            lastVisit: "2024-11-10",
            observation: "Chequeo general. Sin anomalías detectadas.",
            prescription: "Ninguna"
        },
        {
            name: "Carlos Perez",
            lastVisit: "2024-10-25",
            observation: "Tos persistente y alergias.",
            prescription: "Antihistamínicos diarios"
        }
    ];

    upcomingEvents = [
        {
            name: "Reunión mensual de doctores",
            date: "21 Diciembre, 2024 - 4:00 PM"
        },
        {
            name: "Reunión con el equipo por Navidad",
            date: "23 Diciembre, 2024 - 10:00 AM"
        }
    ];
    ngAfterViewInit(): void {
        // Registra las escalas y elementos necesarios
        Chart.register(...registerables);

        this.createWeeklyChart();
    }
    createWeeklyChart(): void {
        const ctx = (document.getElementById("weeklyChart") as HTMLCanvasElement)?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["01 Dic", "02 Dic", "03 Dic", "04 Dic", "05 Dic", "06 Dic", "07 Dic"],
                    datasets: [
                        {
                            label: "Gastritis",
                            data: [4, 2, 3, 1, 5, 2, 4],
                            backgroundColor: "rgba(56, 161, 105, 0.6)", // Verde translúcido
                            borderColor: "#38A169", // Verde
                            borderWidth: 1
                        },
                        {
                            label: "Reflujo",
                            data: [2, 1, 0, 4, 3, 2, 1],
                            backgroundColor: "rgba(49, 130, 206, 0.6)", // Azul translúcido
                            borderColor: "#3182CE", // Azul
                            borderWidth: 1
                        },
                        {
                            label: "Úlcera gástrica",
                            data: [0, 2, 1, 3, 2, 1, 0],
                            backgroundColor: "rgba(229, 62, 62, 0.6)", // Rojo translúcido
                            borderColor: "#E53E3E", // Rojo
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top"
                        },
                        tooltip: {
                            callbacks: {
                                label: context => {
                                    const value = context.raw;
                                    return `Casos: ${value}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Fecha"
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: false,
                                text: "Cantidad de diagnósticos"
                            }
                        }
                    }
                }
            });
        } else {
            console.error("No se pudo obtener el contexto del canvas");
        }
    }
}

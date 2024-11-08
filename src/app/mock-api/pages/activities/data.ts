/* eslint-disable */
import { DateTime } from "luxon";

/* Get the current instant */
const now = DateTime.now();

export const activities = [
    {
        id: "493190c9-5b61-4912-afe5-78c21f1044d7",
        icon: "heroicons_solid:heart",
        description: "Consulta de seguimiento realizada",
        date: now.minus({ minutes: 25 }).toISO(), // Hace 25 minutos
        extraContent: `<div class="font-bold">Observación:</div><br>
                        <div>Se notó una mejora en los síntomas tras el cambio de tratamiento indicado en la última consulta. Se recomienda continuar con la dosis actual...</div>`
    },
    {
        id: "6e3e97e5-effc-4fb7-b730-52a151f0b641",
        image: "assets/images/avatars/male-04.jpg",
        description: "<strong>Dr. Leo Gill</strong> ha actualizado el plan de tratamiento y asignado una consulta de seguimiento",
        date: now.minus({ minutes: 50 }).toISO(), // Hace 50 minutos
        linkedContent: "Plan de Tratamiento",
        link: "/medical/plans",
        useRouter: true
    },
    {
        id: "b91ccb58-b06c-413b-b389-87010e03a120",
        icon: "heroicons_solid:check-badge",
        description: "Resultados de laboratorio disponibles",
        date: now.minus({ hours: 3 }).toISO(), // Hace 3 horas
        linkedContent: "Laboratorio",
        link: "/medical/laboratory",
        useRouter: true
    },
    {
        id: "541416c9-84a7-408a-8d74-27a43c38d797",
        icon: "heroicons_solid:arrow-up-tray",
        description: "Nueva recomendación de tratamiento disponible",
        date: now.minus({ hours: 5 }).toISO(), // Hace 5 horas
        linkedContent: "Descargar recomendación",
        link: ".",
        useRouter: true
    },
    {
        id: "ef7b95a7-8e8b-4616-9619-130d9533add9",
        image: "assets/images/avatars/male-06.jpg",
        description: "<strong>Dr. Roger Murray</strong> ha aprobado el plan de tratamiento",
        date: now.minus({ hours: 7 }).toISO(), // Hace 7 horas
        extraContent: `Tiene <span class="font-semibold">8</span> citas agendadas próximas.`
    },
    {
        id: "eb8aa470-635e-461d-88e1-23d9ea2a5665",
        image: "assets/images/avatars/female-04.jpg",
        description: "<strong>Enfermera Sophie Stone</strong> le ha enviado un mensaje directo sobre el cuidado post-operatorio",
        date: now.minus({ hours: 9 }).toISO() // Hace 9 horas
    },
    {
        id: "b85c2338-cc98-4140-bbf8-c226ce4e395e",
        icon: "heroicons_solid:envelope",
        description: "Tienes nuevos documentos clínicos disponibles",
        date: now.minus({ day: 1 }).toISO(), // Hace 1 día
        extraContent: `<ol class="list-decimal list-inside space-y-2">
                            <li class="font-medium">Informe de radiografía de tórax</li>
                            <li class="font-medium">Resultado de análisis de sangre</li>
                            <li class="font-medium">Resumen de la consulta de seguimiento</li>
                        </ol>`,
        linkedContent: "Documentos clínicos",
        link: "/medical/documents",
        useRouter: true
    },
    {
        id: "fd0f01b4-f3de-4333-add5-cd86850279f8",
        image: "assets/images/avatars/female-02.jpg",
        description: "<strong>Enfermera Tina Harris</strong> ha comenzado un chat sobre su recuperación",
        date: now.minus({ day: 1 }).toISO(), // Hace 1 día
        linkedContent: "Ir al Chat (Tina Harris)",
        link: "/medical/chat/5636c0ba-fa47-42ca-9160-27340583041e",
        useRouter: true
    },
    {
        id: "8f8e1bf9-4661-4939-9e43-390957b60f42",
        icon: "heroicons_solid:star",
        description: "Informe de diagnóstico actualizado disponible para revisión",
        date: now.minus({ days: 3 }).toISO() // Hace 3 días
    },
    {
        id: "30af917b-7a6a-45d1-822f-9e7ad7f8bf69",
        icon: "heroicons_solid:arrow-path",
        description: "Resultados de estudios previos listos para descargar",
        date: now.minus({ days: 4 }).toISO() // Hace 4 días
    }
];

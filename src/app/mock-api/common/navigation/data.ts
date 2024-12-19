import { FuseNavigationItem } from "@fuse/components/navigation";

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: "home",
        title: "Inicio",
        subtitle: "Resumen general del sistema",
        type: "group",
        icon: "heroicons_outline:home",
        children: [
            {
                id: "dashboards.home",
                title: "Vista principal",
                type: "basic",
                icon: "heroicons_outline:home",
                link: "/inicio"
            }
        ]
    },
    {
        id: "patients",
        title: "Pacientes",
        subtitle: "Información de los pacientes",
        type: "group",
        icon: "heroicons_outline:user-group",
        children: [
            {
                id: "patients.list",
                title: "Listado de pacientes",
                subtitle: "Consulta y administración de registros",
                type: "basic",
                icon: "heroicons_outline:user-group",
                link: "/pacientes/lista"
            },
            {
                id: "patients.history",
                title: "Historial clínico",
                subtitle: "Registro detallado del historial médico",
                type: "basic",
                icon: "heroicons_outline:book-open",
                link: "/pacientes/historia"
            }
        ]
    },
    {
        id: "real-time-images",
        title: "Imágenes en Tiempo Real",
        subtitle: "Visualización y procesamiento en vivo",
        type: "group",
        icon: "heroicons_outline:camera",
        children: [
            {
                id: "real-time-images.capture",
                title: "Captura en vivo",
                subtitle: "Captura de imágenes en tiempo real",
                type: "basic",
                icon: "heroicons_outline:video-camera",
                link: "/tiempo-real/reproduccion"
            },
            {
                id: "real-time-images.filters",
                title: "Galería de Resultados",
                subtitle: "Colección de imágenes capturadas por la cápsula",
                type: "basic",
                icon: "heroicons_outline:adjustments-horizontal",
                link: "/tiempo-real/resultados"
            }
        ]
    },
    {
        id: "support",
        title: "Soporte",
        subtitle: "Asistencia técnica y documentación",
        type: "group",
        icon: "heroicons_outline:question-mark-circle",
        children: [
            {
                id: "support.guides",
                title: "Guías de uso",
                type: "basic",
                icon: "heroicons_outline:book-open",
                link: "/soporte/guias"
            },
            {
                id: "support.faq",
                title: "Preguntas frecuentes",
                type: "basic",
                icon: "heroicons_outline:question-mark-circle",
                link: "/soporte/preguntas-frecuentes"
            },
            {
                id: "support.contact",
                title: "Contacto con soporte",
                type: "basic",
                icon: "heroicons_outline:chat-bubble-bottom-center-text",
                link: "/soporte/contacto"
            }
        ]
    }
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: "home",
        title: "home.title",
        subtitle: "home.overview",
        type: "group",
        icon: "heroicons_outline:home",
        userType: "patient",
        children: [
            {
                id: "dashboards.home",
                title: "home.title",
                type: "basic",
                icon: "heroicons_outline:home",
                link: "/inicio"
            }
        ]
    },
    {
        id: "patients",
        title: "patients.title",
        type: "group",
        icon: "heroicons_outline:user-group",
        children: [
            {
                id: "patients.list",
                title: "patients.list",
                type: "basic",
                icon: "heroicons_outline:user-group",
                link: "/pacientes/lista"
            },
            {
                id: "patients.history",
                title: "patients.history",
                type: "basic",
                icon: "heroicons_outline:book-open",
                link: "/pacientes/historia"
            }
        ]
    },
    {
        id: "real-time-images",
        title: "real-time-images.title",
        type: "group",
        icon: "heroicons_outline:camera",
        children: [
            {
                id: "real-time-images.capture",
                title: "real-time-images.capture",
                type: "basic",
                icon: "heroicons_outline:video-camera",
                link: "/tiempo-real/"
            }
        ]
    },
    {
        id: "support",
        title: "support.title",
        type: "group",
        icon: "heroicons_outline:question-mark-circle",
        children: [
            {
                id: "support.guides",
                title: "support.guides",
                type: "basic",
                icon: "heroicons_outline:book-open",
                link: "/support/guides"
            },
            {
                id: "support.faq",
                title: "support.faq",
                type: "basic",
                icon: "heroicons_outline:question-mark-circle",
                link: "/support/faq"
            },
            {
                id: "support.contact",
                title: "support.contact",
                type: "basic",
                icon: "heroicons_outline:chat-bubble-bottom-center-text",
                link: "/support/contact"
            }
        ]
    }
];

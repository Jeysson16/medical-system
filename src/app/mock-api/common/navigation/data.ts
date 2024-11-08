import { FuseNavigationItem } from "@fuse/components/navigation";

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: "home",
        title: "home.title",
        subtitle: "home.overview",
        type: "group",
        icon: "heroicons_outline:home",
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
                link: "/real-time-images/capture"
            },
            {
                id: "real-time-images.filters",
                title: "real-time-images.filters",
                type: "basic",
                icon: "heroicons_outline:adjustments-horizontal",
                link: "/real-time-images/filters"
            }
        ]
    },
    {
        id: "anomaly-analysis",
        title: "anomaly-analysis.title",
        type: "group",
        icon: "heroicons_outline:exclamation-circle",
        children: [
            {
                id: "anomaly-analysis.detected",
                title: "anomaly-analysis.detected",
                type: "basic",
                icon: "heroicons_outline:magnifying-glass-circle",
                link: "/anomaly-analysis/detected"
            },
            {
                id: "anomaly-analysis.reports",
                title: "anomaly-analysis.reports",
                type: "basic",
                icon: "heroicons_outline:clipboard-document-list",
                link: "/anomaly-analysis/reports"
            }
        ]
    },
    {
        id: "study-progress",
        title: "study-progress.title",
        type: "group",
        icon: "heroicons_outline:chart-bar",
        children: [
            {
                id: "study-progress.map",
                title: "study-progress.map",
                type: "basic",
                icon: "heroicons_outline:map",
                link: "/study-progress/map"
            },
            {
                id: "study-progress.graphs",
                title: "study-progress.graphs",
                type: "basic",
                icon: "heroicons_outline:chart-bar",
                link: "/study-progress/graphs"
            }
        ]
    },
    {
        id: "study-comparison",
        title: "study-comparison.title",
        type: "group",
        icon: "heroicons_outline:scale",
        children: [
            {
                id: "study-comparison.current",
                title: "study-comparison.current",
                type: "basic",
                icon: "heroicons_outline:clipboard-document",
                link: "/study-comparison/current"
            },
            {
                id: "study-comparison.similar",
                title: "study-comparison.similar",
                type: "basic",
                icon: "heroicons_outline:adjustments-vertical",
                link: "/study-comparison/similar"
            }
        ]
    },
    {
        id: "vital-signs",
        title: "vital-signs.title",
        type: "group",
        icon: "heroicons_outline:heart",
        children: [
            {
                id: "vital-signs.ph",
                title: "vital-signs.ph",
                type: "basic",
                icon: "heroicons_outline:beaker",
                link: "/vital-signs/ph"
            },
            {
                id: "vital-signs.temperature",
                title: "vital-signs.temperature",
                type: "basic",
                icon: "feather:thermometer",
                link: "/vital-signs/temperature"
            },
            {
                id: "vital-signs.pressure",
                title: "vital-signs.pressure",
                type: "basic",
                icon: "heroicons_outline:scale",
                link: "/vital-signs/pressure"
            }
        ]
    },
    {
        id: "reports",
        title: "reports.title",
        type: "group",
        icon: "heroicons_outline:document-text",
        children: [
            {
                id: "reports.generate",
                title: "reports.generate",
                type: "basic",
                icon: "heroicons_outline:document-plus",
                link: "/reports/generate"
            },
            {
                id: "reports.export",
                title: "reports.export",
                type: "basic",
                icon: "heroicons_outline:arrow-top-right-on-square",
                link: "/reports/export"
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

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: "dashboards",
        title: "Dashboards",
        tooltip: "Dashboards",
        type: "aside",
        icon: "heroicons_outline:home",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "apps",
        title: "Apps",
        tooltip: "Apps",
        type: "aside",
        icon: "heroicons_outline:qrcode",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "pages",
        title: "Pages",
        tooltip: "Pages",
        type: "aside",
        icon: "heroicons_outline:document-duplicate",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "user-interface",
        title: "UI",
        tooltip: "UI",
        type: "aside",
        icon: "heroicons_outline:rectangle-stack",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "navigation-features",
        title: "Navigation",
        tooltip: "Navigation",
        type: "aside",
        icon: "heroicons_outline:bars-3",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: "dashboards",
        title: "DASHBOARDS",
        type: "group",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "apps",
        title: "APPS",
        type: "group",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "others",
        title: "OTHERS",
        type: "group"
    },
    {
        id: "pages",
        title: "Pages",
        type: "aside",
        icon: "heroicons_outline:document-duplicate",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "user-interface",
        title: "User Interface",
        type: "aside",
        icon: "heroicons_outline:rectangle-stack",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "navigation-features",
        title: "Navigation Features",
        type: "aside",
        icon: "heroicons_outline:bars-3",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: "dashboards",
        title: "Dashboards",
        type: "group",
        icon: "heroicons_outline:home",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "apps",
        title: "Apps",
        type: "group",
        icon: "heroicons_outline:qrcode",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "pages",
        title: "Pages",
        type: "group",
        icon: "heroicons_outline:document-duplicate",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "user-interface",
        title: "UI",
        type: "group",
        icon: "heroicons_outline:rectangle-stack",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: "navigation-features",
        title: "Misc",
        type: "group",
        icon: "heroicons_outline:bars-3",
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];

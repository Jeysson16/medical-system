import { NgFor, NgTemplateOutlet } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FuseNavigationService, FuseVerticalNavigationComponent } from "@fuse/components/navigation";
import { AvailableLangs, TranslocoService } from "@jsverse/transloco";
import { take } from "rxjs";

@Component({
    selector: "languages",
    templateUrl: "./languages.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: "languages",
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, NgTemplateOutlet, NgFor]
})
export class LanguagesComponent implements OnInit, OnDestroy {
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(private _changeDetectorRef: ChangeDetectorRef, private _fuseNavigationService: FuseNavigationService, private _translocoService: TranslocoService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe(activeLang => {
            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            en: "us",
            es: "es"
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>("mainNavigation");

        // Return if the navigation component does not exist
        if (!navComponent) {
            return null;
        }
        // Obtener los datos de navegación plana
        const navigation = navComponent.navigation;

        // Función para traducir y aplicar títulos y subtítulos
        const translateNavigationItem = (id: string, titleKey: string, subtitleKey?: string) => {
            const navItem = this._fuseNavigationService.getItem(id, navigation);
            if (navItem) {
                // Asignar el título traducido
                this._translocoService
                    .selectTranslate(titleKey)
                    .pipe(take(1))
                    .subscribe(translation => {
                        navItem.title = translation;
                        navComponent.refresh();
                    });

                // Asignar el subtítulo traducido si existe
                if (subtitleKey) {
                    this._translocoService
                        .selectTranslate(subtitleKey)
                        .pipe(take(1))
                        .subscribe(translation => {
                            navItem.subtitle = translation;
                            navComponent.refresh();
                        });
                }
            }
        };

        // Traducción de categorías principales con título y subtítulo
        translateNavigationItem("home", "home.title", "home.overview");
        translateNavigationItem("patients", "patients.title", "patients.list");
        translateNavigationItem("real-time-images", "real-time-images.title", "real-time-images.filters");
        translateNavigationItem("anomaly-analysis", "anomaly-analysis.title", "anomaly-analysis.reports");
        translateNavigationItem("study-progress", "study-progress.title", "study-progress.graphs");
        translateNavigationItem("study-comparison", "study-comparison.title", "study-comparison.similar");
        translateNavigationItem("vital-signs", "vital-signs.title", "vital-signs.pressure");
        translateNavigationItem("reports", "reports.title", "reports.export");
        translateNavigationItem("support", "support.title", "support.contact");

        // Traducción de ítems individuales solo con título
        translateNavigationItem("dashboards.home", "home.title");
        translateNavigationItem("patients.list", "patients.list");
        translateNavigationItem("patients.history", "patients.history");
        translateNavigationItem("real-time-images.capture", "real-time-images.capture");
        translateNavigationItem("real-time-images.filters", "real-time-images.filters");
        translateNavigationItem("anomaly-analysis.detected", "anomaly-analysis.detected");
        translateNavigationItem("anomaly-analysis.reports", "anomaly-analysis.reports");
        translateNavigationItem("study-progress.map", "study-progress.map");
        translateNavigationItem("study-progress.graphs", "study-progress.graphs");
        translateNavigationItem("study-comparison.current", "study-comparison.current");
        translateNavigationItem("study-comparison.similar", "study-comparison.similar");
        translateNavigationItem("vital-signs.ph", "vital-signs.ph");
        translateNavigationItem("vital-signs.temperature", "vital-signs.temperature");
        translateNavigationItem("vital-signs.pressure", "vital-signs.pressure");
        translateNavigationItem("reports.generate", "reports.generate");
        translateNavigationItem("reports.export", "reports.export");
        translateNavigationItem("support.guides", "support.guides");
        translateNavigationItem("support.faq", "support.faq");
        translateNavigationItem("support.contact", "support.contact");
    }
}

import { AsyncPipe, DOCUMENT, I18nPluralPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { filter, fromEvent, Observable, Subject, switchMap, takeUntil } from "rxjs";
import { Country, Patient } from "@models/IPatient";
import { PatientsService } from "@services/patients-list.service";
import { TranslocoPipe } from "@jsverse/transloco";

@Component({
    selector: "patients-list",
    templateUrl: "./list.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatSidenavModule,
        RouterOutlet,
        NgIf,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgFor,
        NgClass,
        RouterLink,
        AsyncPipe,
        I18nPluralPipe,
        TranslocoPipe
    ]
})
export class PatientsViewListComponent implements OnInit, OnDestroy {
    @ViewChild("matDrawer", { static: true }) matDrawer: MatDrawer;

    contacts$: Observable<Patient[]>;

    contactsCount: number = 0;
    contactsTableColumns: string[] = ["name", "email", "phoneNumber", "job"];
    countries: Country[];
    drawerMode: "side" | "over";
    searchInputControl: UntypedFormControl = new UntypedFormControl();
    selectedContact: Patient;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _patientsListService: PatientsService,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the contacts
        this.contacts$ = this._patientsListService.contacts$;
        this._patientsListService.contacts$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contacts: Patient[]) => {
            // Update the counts
            this.contactsCount = contacts.length;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Get the contact
        this._patientsListService.contact$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contact: Patient) => {
            // Update the selected contact
            this.selectedContact = contact;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Get the countries
        this._patientsListService.countries$.pipe(takeUntil(this._unsubscribeAll)).subscribe((countries: Country[]) => {
            // Update the countries
            this.countries = countries;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                switchMap(query =>
                    // Search
                    this._patientsListService.searchContacts(query)
                )
            )
            .subscribe();

        // Subscribe to MatDrawer opened change
        this.matDrawer.openedChange.subscribe(opened => {
            if (!opened) {
                // Remove the selected contact when drawer closed
                this.selectedContact = null;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
            // Set the drawerMode if the given breakpoint is active
            if (matchingAliases.includes("lg")) {
                this.drawerMode = "side";
            } else {
                this.drawerMode = "over";
            }

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Listen for shortcuts
        fromEvent(this._document, "keydown")
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter<KeyboardEvent>(
                    event =>
                        (event.ctrlKey === true || event.metaKey) && // Ctrl or Cmd
                        event.key === "/" // '/'
                )
            )
            .subscribe(() => {
                this.createContact();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(["./"], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Create contact
     */
    createContact(): void {
        // Create the contact
        this._patientsListService.createContact().subscribe(newContact => {
            // Go to the new contact
            this._router.navigate(["./", newContact.id], { relativeTo: this._activatedRoute });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
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
}

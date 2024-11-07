import { NgClass, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { fuseAnimations } from "@fuse/animations";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";

@Component({
    selector: "ec-image-gallery",
    standalone: true,
    animations: fuseAnimations,
    imports: [NgFor, NgIf, NgClass, MatIcon, TranslocoPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold">{{ title | transloco }}</h2>
            <div class="mt-4">
                <!-- Tabs Header -->
                <ul class="flex border-b">
                    @for (tab of tabs; track $index) {
                    <li (click)="selectTab(tab.value)" [ngClass]="{ 'border-primary-500 text-primary-500': selectedTab === tab.value }" class="cursor-pointer px-4 py-2">
                        {{ tab.label | transloco }}
                    </li>
                    }
                </ul>

                <!-- Image Content for Selected Tab -->
                <div>
                    <!-- Check if there are images for the selected tab -->
                    @if (imagesByTab[selectedTab] && imagesByTab[selectedTab].length) {
                    <!-- Carousel Wrapper for Images -->
                    <div class="relative w-full" data-carousel="slide">
                        <div class="relative h-32 overflow-hidden rounded-lg md:h-56">
                            <!-- Carousel Items -->
                            @for (image of imagesByTab[selectedTab]; track $index) {
                            <div
                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out"
                                [ngClass]="{ hidden: currentSlide !== $index }"
                                data-carousel-item>
                                <img [src]="image" alt="Gallery Image {{ $index + 1 }}" class="object-contain w-full max-h-52 rounded-lg" loading="lazy" />
                            </div>
                            }
                        </div>

                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                            <button
                                *ngFor="let image of imagesByTab[selectedTab]; let i = index"
                                type="button"
                                class="w-3 h-3 rounded-full"
                                [ngClass]="{ 'bg-primary-500': currentSlide === i, 'bg-gray-300': currentSlide !== i }"
                                aria-label="Slide {{ i + 1 }}"
                                (click)="goToSlide(i)"></button>
                        </div>
                        <!-- Slider controls -->
                        <button
                            type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            (click)="prevSlide()"
                            data-carousel-prev>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" fill="none">
                                    <path d="M5 1L1 5l4 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            (click)="nextSlide()"
                            data-carousel-next>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" fill="none">
                                    <path d="M1 9l4-4L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    }@else {
                    <p>{{ "imageGallery.no_images" | transloco }}</p>
                    }
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./ec-image-gallery.component.scss"],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-image-gallery", alias: "imageGallery" }
        }
    ]
})
export class EcImageGalleryComponent {
    @Input() title: string = "imageGallery.title";
    @Input() tabs: { label: string; value: string }[] = [
        { label: "imageGallery.tabs.all", value: "all" },
        { label: "imageGallery.tabs.anomalies", value: "anomalies" },
        { label: "imageGallery.tabs.normal", value: "normal" }
    ];
    @Input() selectedTab: string = "all";
    @Input() imagesByTab: { [key: string]: string[] } = {
        all: Array.from({ length: 12 }).map((_, index) => `/assets/images/ui/components/placeholder.svg?height=100&width=100&image=${index + 1}`),
        anomalies: Array.from({ length: 6 }).map((_, index) => `/assets/images/ui/components/anomalies-placeholder.svg?height=100&width=100&image=${index + 1}`),
        normal: Array.from({ length: 6 }).map((_, index) => `/assets/images/ui/components/normal-placeholder.svg?height=100&width=100&image=${index + 1}`)
    };

    currentSlide: number = 0;

    selectTab(tabValue: string) {
        this.selectedTab = tabValue;
        this.currentSlide = 0; // Reset slide when switching tabs
    }

    prevSlide() {
        const images = this.imagesByTab[this.selectedTab] || [];
        this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : images.length - 1;
    }

    nextSlide() {
        const images = this.imagesByTab[this.selectedTab] || [];
        this.currentSlide = this.currentSlide < images.length - 1 ? this.currentSlide + 1 : 0;
    }

    goToSlide(slideIndex: number) {
        this.currentSlide = slideIndex;
    }
}

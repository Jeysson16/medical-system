import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [NgFor, NgIf,NgClass],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Image Gallery</h2>
    <div class="mt-4">
      <ul class="flex border-b">
        <li *ngFor="let tab of tabs"
            (click)="selectTab(tab.value)"
            [ngClass]="{ 'border-blue-500 text-blue-500': selectedTab === tab.value }"
            class="cursor-pointer px-4 py-2">
          {{ tab.label }}
        </li>
      </ul>

      <div class="mt-4">
        <ng-container *ngIf="selectedTab === 'all'">
          <div class="grid grid-cols-6 gap-4">
            <img *ngFor="let image of allImages" src="{{ image }}" alt="Gallery Image" class="w-full h-auto rounded-lg" />
          </div>
        </ng-container>

        <ng-container *ngIf="selectedTab === 'anomalies'">
          <p>Anomalies content</p>
        </ng-container>

        <ng-container *ngIf="selectedTab === 'normal'">
          <p>Normal content</p>
        </ng-container>
      </div>
    </div>
  </div>`,
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {
  tabs = [
    { label: 'All', value: 'all' },
    { label: 'Anomalies', value: 'anomalies' },
    { label: 'Normal', value: 'normal' }
  ];
  selectedTab = 'all';
  allImages = Array.from({ length: 12 }).map((_, index) => `/assets/images/ui/components/placeholder.svg?height=100&width=100&image=${index + 1}`);

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}

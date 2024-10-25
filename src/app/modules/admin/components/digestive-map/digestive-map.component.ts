import { Component } from '@angular/core';

@Component({
  selector: 'app-digestive-map',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Interactive Digestive Map</h2>
    <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mt-4">
      <span class="text-gray-500">Interactive Digestive Map Placeholder</span>
    </div>
  </div>`,
  styleUrl: './digestive-map.component.scss'
})
export class DigestiveMapComponent {

}

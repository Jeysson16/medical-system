import { Component } from '@angular/core';

@Component({
  selector: 'app-live-progress',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Live Progress Tracker</h2>
    <div class="space-y-4 mt-4">
      <div class="flex justify-between items-center">
        <span>Esophagus</span><span>Small Intestine</span><span>Large Intestine</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-blue-500 h-2.5 rounded-full" style="width: 60%"></div>
      </div>
      <div class="text-center mt-2">
        <span class="font-medium">Current Location: </span><span>Small Intestine</span>
      </div>
    </div>
  </div>
  `,
  styleUrl: './live-progress.component.scss'
})
export class LiveProgressComponent {

}

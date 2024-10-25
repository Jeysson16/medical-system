import { Component } from '@angular/core';

@Component({
  selector: 'app-vital-signs',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Vital Signs</h2>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="flex items-center space-x-2"><span>❤️</span><span>Heart Rate: 72 bpm</span></div>
      <div class="flex items-center space-x-2"><span>🌡️</span><span>Temperature: 37.2°C</span></div>
      <div class="flex items-center space-x-2"><span>🔋</span><span>Battery: 75%</span></div>
      <div class="flex items-center space-x-2"><span>📶</span><span>Signal Strength: Good</span></div>
    </div>
  </div>`,
  styleUrl: './vital-signs.component.scss'
})
export class VitalSignsComponent {

}

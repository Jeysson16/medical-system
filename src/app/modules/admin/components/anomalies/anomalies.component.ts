import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-anomalies',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">AI-Detected Anomalies</h2>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <div *ngFor="let anomaly of anomalies" class="space-y-2">
        <img src="/assets/images/ui/components/placeholder.svg" alt="Anomaly" class="w-full h-auto rounded-lg" />
        <div class="flex justify-between items-center">
          <span [ngClass]="getBadgeClass(anomaly.risk)">{{ anomaly.risk }}</span>
          <span class="text-sm text-gray-500">{{ anomaly.time }}</span>
        </div>
      </div>
    </div>
  </div>`,
  styleUrl: './anomalies.component.scss'
})
export class AnomaliesComponent {

  anomalies = [
    { risk: 'Severe', time: '10:23 AM' },
    { risk: 'Moderate', time: '10:45 AM' },
    { risk: 'Mild', time: '11:02 AM' },
  ];

  getBadgeClass(risk: string) {
    return risk === 'Severe'
      ? 'text-red-500'
      : risk === 'Moderate'
      ? 'text-yellow-500'
      : 'text-gray-500';
  }
}

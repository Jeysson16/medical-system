import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Patient Profile</h2>
    <div class="space-y-2 mt-4">
      <div class="flex justify-between"><span class="font-medium">Name:</span><span>Jeysson Sánchez</span></div>
      <div class="flex justify-between"><span class="font-medium">Age:</span><span>19</span></div>
      <div class="flex justify-between"><span class="font-medium">Gender:</span><span>Masculino</span></div>
      <div class="flex justify-between"><span class="font-medium">Medical History:</span><span> - </span></div>
    </div>
  </div>`,
  styleUrl: './patient-profile.component.scss'
})
export class PatientProfileComponent {

}

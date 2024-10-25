import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors-notes',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold">Doctor's Notes</h2>
    <textarea placeholder="Enter your notes here..." class="min-h-[200px] mt-4 w-full p-2 border rounded"></textarea>
    <button class="mt-4 w-full py-2 bg-blue-500 text-white rounded">Save Notes</button>
  </div>`,
  styleUrl: './doctors-notes.component.scss'
})
export class DoctorsNotesComponent {

}

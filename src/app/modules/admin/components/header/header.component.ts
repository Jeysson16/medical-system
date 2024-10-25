import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Capsule Endoscopy Dashboard</h1>
      <button class="border border-gray-300 py-2 px-4 rounded">End Procedure</button>
    </div>
  </header>`,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

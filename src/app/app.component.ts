import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <div [class.dark]="darkMode">
      <app-header (toggle)="toggleDark()"></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  darkMode = false;
  title: any;
  constructor() {
    console.log('appComponent');
  }
  toggleDark() {
    this.darkMode = !this.darkMode;
  }
}

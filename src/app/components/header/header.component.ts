import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: ` <header
    style="position:sticky;top:0;background:var(--bg);border-bottom:1px solid var(--border);z-index:10"
  >
    <div
      class="container"
      style="display:flex;justify-content:space-between;align-items:center;padding:16px 24px"
    >
      <strong>Vikrant Teotia</strong>
      <nav style="display:flex;gap:20px;align-items:center">
        <a routerLink="/">Home</a>
        <a routerLink="/blog">Blog</a>
        <button (click)="toggle.emit()">🌓</button>
      </nav>
    </div>
  </header>`,
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
}

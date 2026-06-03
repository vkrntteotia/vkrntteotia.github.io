import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AdBannerComponent } from '../ad-banner/ad-banner.component';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AdBannerComponent, NgIf],
  template: ` 
  <header
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
        <a routerLink="/case-studies">Case Studies</a>
        <button (click)="toggle.emit()">🌓</button>
      </nav>
    </div>
  </header>
  <app-ad-banner *ngIf="showAds"></app-ad-banner>
  `,
})
export class HeaderComponent implements AfterViewInit {
  @Output() toggle = new EventEmitter<void>();
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  showAds = false;
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        const showAds =
          !url.startsWith('/terms-and-conditions') &&
          !url.startsWith('/privacy-policy');
        setTimeout(() => {
          this.showAds = showAds;
          this.cdr.detectChanges();
        }, 3000);
      });
  }
}

import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AdBannerComponent, NgIf],
  template: `
    <section class="page">
      <h1>Case Studies</h1>

      <div class="card">
        <h2>Company Website – IT Services</h2>
        <p>
          A professional company website built to showcase services, trust, and
          lead generation.
        </p>
        <a routerLink="/case-studies/company-website"> View Case Study → </a>
      </div>
    </section>
    <app-ad-banner *ngIf="showAds"></app-ad-banner>
  `,
  styles: [
    `
      .card {
        border: 1px solid #e5e7eb;
        padding: 20px;
        border-radius: 12px;
        max-width: 500px;
      }
      a {
        color: #2563eb;
        font-weight: 600;
        text-decoration: none;
      }
    `,
  ],
})
export class CaseStudiesComponent implements AfterViewInit {
   private cdr = inject(ChangeDetectorRef);
    private router = inject(Router);
    showAds = false;
    ngAfterViewInit(): void {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          const url = this.router.url;
          this.showAds =
            !url.startsWith('/terms-and-conditions') &&
            !url.startsWith('/privacy-policy');
          setTimeout(() => {
            this.showAds = true;
            this.cdr.detectChanges();
          }, 2000);
        });
    }
}

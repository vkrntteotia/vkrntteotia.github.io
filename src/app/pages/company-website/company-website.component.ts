import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, AdBannerComponent, NgIf],
  styles: [
    `
      .page {
        margin-left: 20px;
      }
    `,
  ],
  template: `
    <section class="page">
      <h1>Company Website – IT Services</h1>

      <h2>Overview</h2>
      <ul>
        <li><strong>Role:</strong> Frontend Developer</li>
        <li><strong>Type:</strong> Demo Company Website</li>
        <!-- <li><strong>Duration:</strong> 2 Weeks</li> -->
      </ul>

      <h2>Problem</h2>
      <p>
        Many small IT companies lack a modern, trust-building website that
        clearly explains their services.
      </p>

      <h2>Solution</h2>
      <ul>
        <li>Clean business-focused UI</li>
        <li>Responsive layout</li>
        <li>Clear service sections</li>
        <li>Contact-focused design</li>
      </ul>

      <h2>Tech Stack</h2>
      <p>Angular, TypeScript, HTML, CSS</p>

      <h2>Learnings</h2>
      <p>
        Learned how to structure business websites and present work as a
        real-world case study.
      </p>
    </section>
    <app-ad-banner *ngIf="showAds"></app-ad-banner>
  `,
})
export class CompanyWebsiteComponent implements AfterViewInit {
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

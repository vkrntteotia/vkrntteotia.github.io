import { NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AdBannerComponent, RouterLink, NgIf],
  template: ` 
  <section class="container" id="contact">
    <h2>Contact</h2>
    <div class="card" style="text-align:center">
      <p>Interested in working together or discussing an opportunity?</p>

      <div style="margin-top:16px">
        <p>
          <b>Email:</b>
          <a href="mailto:vkrntteotia@gmail.com">vkrntteotia@gmail.com</a>
        </p>
        <p><b>Phone:</b> 7668390766</p>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between;align-items: baseline;"> 
          <a routerLink="/privacy-policy">Privacy Policy</a>
          <a routerLink="/terms-and-conditions">Terms & Conditions</a>
    </div>
  </section> 
  <app-ad-banner *ngIf="showAds"></app-ad-banner>`,
})
export class ContactComponent implements AfterViewInit { 
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

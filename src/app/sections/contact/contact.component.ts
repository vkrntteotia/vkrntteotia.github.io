import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AdBannerComponent,RouterLink],
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
  <div style="display: flex;
    justify-content: space-between;
    align-items: baseline;"> 
        <a routerLink="/privacy-policy">Privacy Policy</a>
        <a routerLink="/privacy-policy">Terms & Conditions</a>
  </div>
  </section> 
  <app-ad-banner></app-ad-banner>`,
})
export class ContactComponent {}

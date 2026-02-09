import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: ` <section class="container" id="contact">
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
  </section>`,
})
export class ContactComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: ` <section class="container">
    <h2>About Me</h2>
    <div class="card">
      <p>
        I am an MCA graduate and Angular & Ionic Developer with over
        <b>8 years of experience</b>
        building government and enterprise-scale applications. I specialize in
        creating scalable, maintainable front-end architectures and admin panels
        used by large user bases.
      </p>
      <p style="margin-top:12px;color:var(--muted)">
        I have worked extensively on projects for the Government of Rajasthan,
        as well as multiple enterprise admin systems and hybrid mobile
        applications.
      </p>
    </div>
  </section>`,
})
export class AboutComponent {}

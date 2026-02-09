import { Component } from '@angular/core';
@Component({
  selector: 'app-experience',
  standalone: true,
  template: ` <section class="container">
    <h2>Experience</h2>
    <div style="display:grid;gap:20px">
      <div class="card">
        <h3>Triazine Software Pvt. Ltd.</h3>
        <small style="color:var(--muted)">Jul 2023 – Present</small>
        <p>Angular enterprise admin panels, scalable UI, role‑based systems.</p>
      </div>
    </div>
  </section>`,
})
export class ExperienceComponent {}

import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  template: ` <section class="container" id="projects">
    <h2>Projects</h2>
    <div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px"
    >
      <div class="card">
        <h3>Indira Rasoi</h3>
        <p style="color:var(--muted)">Govt of Rajasthan</p>
        <p>State‑wide beneficiary transaction monitoring app.</p>
      </div>
      <div class="card">
        <h3>RajKaushal</h3>
        <p style="color:var(--muted)">Employment Exchange</p>
        <p>Labor & employer matching platform.</p>
      </div>
    </div>
  </section>`,
})
export class ProjectsComponent {}

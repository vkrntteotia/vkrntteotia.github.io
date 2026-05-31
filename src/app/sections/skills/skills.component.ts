import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: ` <section class="container">
    <h2>Skills</h2>
    <div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px"
    >
      <div class="card">
        <h4>Frontend</h4>
        <ul>
          <li>Angular 15</li>
          <li>Ionic 1–5</li>
          <li>TypeScript</li>
          <li>HTML5 / CSS3</li>
        </ul>
      </div>

      <div class="card">
        <h4>Architecture</h4>
        <ul>
          <li>Standalone Components</li>
          <li>Lazy Loading</li>
          <li>Role-based Access</li>
        </ul>
      </div>

      <div class="card">
        <h4>Tools</h4>
        <ul>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  </section>`,
})
export class SkillsComponent {}

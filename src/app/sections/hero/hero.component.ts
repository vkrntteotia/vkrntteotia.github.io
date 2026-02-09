import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: ` <section class="container" style="text-align:center">
    <h1 style="font-size:42px">Vikrant Kumar Teotia</h1>
    <p style="color:var(--muted);font-size:18px">Angular & Ionic Developer</p>
    <p style="color:var(--muted)">Government & Enterprise Applications</p>

    <div style="margin-top:32px;display:flex;gap:16px;justify-content:center">
      <a class="card" href="#projects">View Projects</a>
      <a class="card" href="assets/Vikrant_Kumar_Teotia_Resume.pdf"
        >Download Resume</a
      >
    </div>
  </section>`,
})
export class HeroComponent {}

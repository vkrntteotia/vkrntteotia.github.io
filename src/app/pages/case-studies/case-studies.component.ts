import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
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
export class CaseStudiesComponent {}

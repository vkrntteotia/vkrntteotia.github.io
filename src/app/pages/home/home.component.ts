import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-projects />
    <app-contact />
  `,
})
export class HomeComponent {
  constructor(meta: Meta, title: Title) {
    title.setTitle('Vikrant Teotia | Angular & Ionic Developer');
    meta.addTag({
      name: 'description',
      content:
        'Angular & Ionic developer with 8+ years experience in government and enterprise apps',
    });
  }
}

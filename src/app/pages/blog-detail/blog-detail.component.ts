import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  template: ` <section class="container">
    <article class="card blog-content">
      <div [innerHTML]="content"></div>
    </article>
  </section>`,
})
export class BlogDetailComponent {
  content = '<p>Loading...</p>';

  constructor(route: ActivatedRoute, http: HttpClient) {
    const slug = route.snapshot.paramMap.get('slug');

    http.get(`assets/blog/${slug}.md`, { responseType: 'text' }).subscribe({
      next: (md) => (this.content = this.formatMarkdown(md)),
      error: () => (this.content = '<p>Post not found.</p>'),
    });
  }

  formatMarkdown(md: string): string {
    return md
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\n\n/g, '<br><br>');
  }
}

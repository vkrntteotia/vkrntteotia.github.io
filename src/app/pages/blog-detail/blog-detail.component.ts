import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { parseMarkdown } from '../../services/markdown-parser';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';
import { filter } from 'rxjs/operators';

interface Blog {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  content: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, AdBannerComponent,NgIf],
  styles: [
    `
      .headerCss {
        padding-left: 20px;
      }
    `,
  ],
  template: `<div *ngIf="loading">Loading blog...</div>

    <div *ngIf="!loading && blog">
      <div class="headerCss">
        <h2>{{ blog.title }}</h2>
        <small *ngIf="blog.date">
          {{ blog.date | date }}
        </small>

        <div class="tags" *ngIf="blog.tags?.length">
          <span *ngFor="let tag of blog.tags">#{{ tag }}</span>
        </div>
      </div>

      <hr />

      <section class="container">
        <article class="card blog-content">
          <div [innerHTML]="blog.content"></div>
        </article>
      </section>
    </div>

    <div *ngIf="!loading && !blog">Blog not found 😕</div>
    <app-ad-banner *ngIf="showAds"></app-ad-banner>
    `,
})
export class BlogDetailComponent implements OnInit,AfterViewInit {
  blog?: Blog;
  loading = true;
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  showAds = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        const showAds =
          !url.startsWith('/terms-and-conditions') &&
          !url.startsWith('/privacy-policy');
        setTimeout(() => {
          this.showAds = showAds;
          this.cdr.detectChanges();
        }, 3000);
      });
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    // console.log(slug, 'slug');
    if (slug) {
      this.loadBlog(slug);
    }
  }

  loadBlog(slug: string) {
    const filePath = `assets/blog/${slug}.md`;

    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (md) => {
        const parsed = parseMarkdown(md);

        this.blog = {
          title: parsed.meta.title ?? 'Untitled',
          description: parsed.meta.description ?? '',
          date: parsed.meta.date,
          tags: parsed.meta.tags,
          content: this.formatMarkdown(parsed.content),
        };

        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
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

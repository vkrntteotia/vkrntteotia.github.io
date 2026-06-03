import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, forkJoin } from 'rxjs';
import { parseMarkdown } from '../../services/markdown-parser';
import { FormsModule } from '@angular/forms';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';

interface Blog {
  title: string;
  description: string;
  slug?: string;
  date?: string;
  tags?: string[];
  content: string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AdBannerComponent, NgIf],
  styles: [
    `
      .searchInputCss {
        height: 30px;
        width: 300px;
        border: 2px solid greenyellow;
        border-radius: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
      }
      .pagination {
        text-align: center;
      }
    `,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
  <section class="container">
    <h2>Blog</h2>
    <input
      type="text"
      placeholder="Search blogs..."
      [(ngModel)]="searchTerm"
      (input)="applyFilter()"
      class="searchInputCss"
    />
    <div
      style="display:grid;gap:20px;margin-bottom: 20px;"
      *ngIf="filteredBlogs.length > 0"
    >
      <div
        class="card"
        *ngFor="
          let blog of filteredBlogs
            | slice : (currentPage - 1) * pageSize : currentPage * pageSize
        "
      >
        <h3>
          <a [routerLink]="['/blog', blog.slug]">{{ blog.title }}</a>
        </h3>
        <p style="color:var(--muted)">
          {{ blog.description }}
        </p>
      </div>
    </div>
    <div
      style="display:grid;gap:20px;margin-bottom: 20px;"
      *ngIf="filteredBlogs.length < 1"
    >
      <div class="card">
        <h3>Blogs Data</h3>
        <p style="color:var(--muted)">No Data Found</p>
      </div>
    </div>
    <!-- Pagination -->
    <div class="pagination">
      <button
        (click)="currentPage = currentPage - 1"
        [disabled]="currentPage === 1"
      >
        Prev
      </button>

      <span>Page {{ currentPage }} / {{ totalPages() }}</span>

      <button
        (click)="currentPage = currentPage + 1"
        [disabled]="currentPage === totalPages()"
      >
        Next
      </button>
    </div>
  </section>
  <app-ad-banner *ngIf="showAds"></app-ad-banner>
  `,
})
export class BlogListComponent implements OnInit, AfterViewInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];

  // pagination
  currentPage = 1;
  pageSize = 5;
  searchTerm = '';

  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  showAds = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBlogs();
  }

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

  loadBlogs() {
    this.http.get<string[]>('assets/blog/index.json').subscribe((files) => {
      const requests = files.map((file) =>
        this.http.get(`assets/blog/${file}`, { responseType: 'text' })
      );

      forkJoin(requests).subscribe((contents) => {
        this.blogs = contents.map((md) => {
          const parsed = parseMarkdown(md);

          return {
            title: parsed.meta.title ?? 'Untitled',
            description: parsed.meta.description ?? '',
            date: parsed.meta.date,
            tags: parsed.meta.tags,
            content: parsed.content,
            slug: parsed.meta.slug,
          };
        });

        // Optional: sort by date (newest first)
        // this.blogs.sort(
        //   (a, b) =>
        //     new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
        // );
        // console.log(this.blogs, ' this.blogs');
        this.applyFilter();
      });
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredBlogs = term
      ? this.blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(term) ||
          blog.description.toLowerCase().includes(term) ||
          blog.content.toLowerCase().includes(term)
      )
      : [...this.blogs];

    // reset to first page after search
    this.currentPage = 1;
  }

  get paginatedBlogs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredBlogs.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.filteredBlogs.length / this.pageSize);
  }
}

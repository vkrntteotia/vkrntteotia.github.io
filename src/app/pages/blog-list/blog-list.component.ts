import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  template: ` <section class="container">
    <h2>Blog</h2>

    <div style="display:grid;gap:20px">
      <div class="card">
        <h3>
          <a routerLink="/blog/angular-performance"
            >Angular Performance Optimization</a
          >
        </h3>
        <p style="color:var(--muted)">
          Practical techniques to improve performance in large Angular
          applications.
        </p>
      </div>

      <div class="card">
        <h3>
          <a routerLink="/blog/deploy-portfolio-github"
            >Deploy Angular Apps to GitHub Pages with angular-cli-ghpages</a
          >
        </h3>
        <p style="color:var(--muted)">
          Easily deploy your Angular applications to GitHub Pages using
          angular-cli-ghpages. Automate the build and deployment process
          directly from the Angular CLI, making it simple to host your app
          online with a single command.
        </p>
      </div>

      <div class="card">
        <h3>
          <a routerLink="/blog/ionic-memory-leaks"
            >Handling Memory Leaks in Ionic</a
          >
        </h3>
        <p style="color:var(--muted)">
          Real-world memory leak issues and fixes from production Ionic apps.
        </p>
      </div>
    </div>
  </section>`,
})
export class BlogListComponent {}

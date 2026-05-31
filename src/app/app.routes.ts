import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { CompanyWebsiteComponent } from './pages/company-website/company-website.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'case-studies/company-website', component: CompanyWebsiteComponent },
  { path: '**', redirectTo: '' },
];

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly content = inject(ContentService);
  theme = 'light';
  activeIndustry = this.content.industries[0];

  services = this.content.services;
  techGroups = this.content.techGroups;
  industries = this.content.industries;
  advantages = this.content.advantages;
  process = this.content.process;
  caseStudies = this.content.caseStudies;
  testimonials = this.content.testimonials;
  faqItems = this.content.faqItems;
  blogPosts = this.content.blogPosts;
  careers = this.content.careers;

  selectIndustry(item: (typeof this.industries)[number]): void {
    this.activeIndustry = item;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

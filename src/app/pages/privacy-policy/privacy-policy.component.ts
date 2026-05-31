import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <div class="container">
      <h1>Privacy Policy</h1>

      <p><strong>Last Updated:</strong> May 31, 2026</p>

      <p>
        Welcome to Vikrant Teotia's Portfolio Website.
      </p>

      <p>
        This Privacy Policy explains how information may be collected, used,
        and protected when you visit this website.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information You Provide</h3>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Messages submitted through contact forms</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Pages visited</li>
        <li>Date and time of access</li>
      </ul>

      <h2>Analytics</h2>
      <p>
        This website may use analytics services to understand visitor activity
        and improve the website experience.
      </p>

      <h2>Advertising</h2>
      <p>
        This website may display advertisements provided by third-party
        advertising networks such as Google AdSense.
      </p>

      <h2>Cookies</h2>
      <p>
        Cookies may be used to improve website functionality, remember
        preferences, analyze traffic, and display advertisements.
      </p>

      <h2>Third-Party Services</h2>
      <ul>
        <li>Google AdSense</li>
        <li>Google Analytics</li>
        <li>Firebase</li>
        <li>GitHub Pages</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        Reasonable measures are taken to protect information; however, no
        internet transmission method is completely secure.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to external websites. We are not
        responsible for third-party content or privacy practices.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        This website is not directed toward children under 13 years of age.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This policy may be updated periodically. Changes will be posted on this
        page.
      </p>

      <h2>Contact</h2>
      <p>Email: your-email@example.com</p>
      <p>Website: https://vkrntteotia.github.io</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 24px;
      line-height: 1.7;
    }

    h1, h2, h3 {
      margin-top: 24px;
    }
  `]
})
export class PrivacyPolicyComponent {}
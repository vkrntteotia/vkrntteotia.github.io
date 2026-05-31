import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  template: `
    <div class="container">
      <h1>Terms and Conditions</h1>

      <p><strong>Last Updated:</strong> May 31, 2026</p>

      <p>
        Welcome to Vikrant Teotia's Portfolio Website.
      </p>

      <p>
        By accessing and using this website, you agree to these Terms and
        Conditions.
      </p>

      <h2>Use of Website</h2>
      <p>
        You agree to use this website only for lawful purposes.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Unless otherwise stated, all content on this website including text,
        code samples, graphics, logos, design elements, and projects belongs
        to Vikrant Teotia.
      </p>

      <h2>Project Information</h2>
      <p>
        Projects and code samples are provided for informational and educational
        purposes only.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to third-party websites. We are not
        responsible for their content or services.
      </p>

      <h2>Advertisements</h2>
      <p>
        Advertisements may be displayed through third-party advertising
        partners such as Google AdSense.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Vikrant Teotia shall not be liable for any damages arising from the use
        of this website.
      </p>

      <h2>Website Availability</h2>
      <p>
        We do not guarantee uninterrupted access and may modify or discontinue
        any part of the website at any time.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        These Terms may be updated without prior notice.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of India.
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

    h1, h2 {
      margin-top: 24px;
    }
  `]
})
export class TermsAndConditionsComponent {}
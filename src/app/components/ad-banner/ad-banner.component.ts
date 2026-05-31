import { AfterViewInit, Component } from '@angular/core';

declare let adsbygoogle: any[];

@Component({
    selector: 'app-ad-banner',
    standalone: true,
    templateUrl: './ad-banner.component.html'
})
export class AdBannerComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        try {
            ((window as any).adsbygoogle =
                (window as any).adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }
}
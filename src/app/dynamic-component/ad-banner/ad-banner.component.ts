import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad-component';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
   setInterval(() => {
      // this.loadComponent();
      this.clearTimer?.();
    }, 10000);
  }

  loadComponent() {
    console.log('this.ads :>> ', this.ads);
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
    this.clearTimer = () => clearInterval(interval);
  }
}

import { Component } from '@angular/core';
import { HtmlEditorService, ImageService, LinkService, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AdService } from './dynamic-component/ad.service';
import { AdItem } from './dynamic-component/ad-item';

interface Headers {
  name: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    console.log('this.ads :>> ', this.ads);
    this.ads = this.adService.getAds();
  }
  // title = 'practice';
  // headers: Headers[] = [
  //   {
  //     name: 'Daily Updates',
  //     link: 'pipe',
  //   }
  // ];
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModule } from './features/pipe/pipe.module';
import { MapComponent } from './map/map.component';
import { RichTextEditorComponent } from './features/rich-text-editor/rich-text-editor.component';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  RichTextEditorModule,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './shared/progress/progress.component';
import { AdBannerComponent } from './dynamic-component/ad-banner/ad-banner.component';
import { AdDirective } from './dynamic-component/ad.directive';
import { HeroJobAdComponent } from './dynamic-component/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-component/hero-profile/hero-profile.component';
import { AdService } from './dynamic-component/ad.service';

@NgModule({
  declarations: [AppComponent, MapComponent, RichTextEditorComponent, FileUploadComponent, AdBannerComponent, AdDirective, HeroJobAdComponent, HeroProfileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PipeModule,
    RichTextEditorModule,
    ProgressComponent
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
})
export class AppModule {}

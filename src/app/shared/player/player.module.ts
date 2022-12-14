import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SharedModule } from '../shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { McqPlayerComponent } from './mcq-player/mcq-player.component';
import { ShakaPlayerComponent } from './shaka-player/shaka-player.component';
import { HtmlPlayerComponent } from './html-player/html-player.component';

@NgModule({
  declarations: [
    PlayerComponent,
    VideoPlayerComponent,
    PdfViewerComponent,
    McqPlayerComponent,
    ShakaPlayerComponent,
    HtmlPlayerComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    SharedModule
  ],
  exports:[PlayerComponent]
})
export class PlayerModule { }

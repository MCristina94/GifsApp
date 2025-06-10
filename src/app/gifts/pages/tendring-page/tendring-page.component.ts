import { Component, computed, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-tendring-page',
  imports: [GifListComponent],
  templateUrl: './tendring-page.component.html',
})
export default class TendringPageComponent {
  gifService = inject(GifService); //traigo la informacion que consumi en service con fetch.
}

import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-tendring-page',
  // imports: [GifListComponent],
  templateUrl: './tendring-page.component.html',
})
export default class TendringPageComponent {
  gifService = inject(GifService); //traigo la informacion que consumi en service con fetch.
  scrollDivRef = viewChild<ElementRef>('groupDiv'); //se esta trayendo la referencia local #groupDiv abajo del evento en el html
  //ElementRef es el valor generico de una referencia
  onScroll(event: Event) {
    console.log(event);
  }
}

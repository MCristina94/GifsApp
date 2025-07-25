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
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv'); //se esta trayendo la referencia local #groupDiv abajo del evento en el html
  //ElementRef es el valor generico de una referencia
  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBotton = scrollTop + clientHeight + 300 >= scrollHeight; // evalua cuando llega al final del scroll en pantalla, para hacer nueva peticion
    //se agregan los 300, para que cuando este cerca al final del scroll, con los 300 de gracia, haga la peticion de las sigueintes imagenes
    if (isAtBotton) {
      this.gifService.loadTrendingGifs();
    }
  }
}

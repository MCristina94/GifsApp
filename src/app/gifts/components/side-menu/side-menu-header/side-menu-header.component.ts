import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';
// import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'gift-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent {
  envs = environment;
}

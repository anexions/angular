//pages no es mas que otro componente donde mostraremos otros componente.

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: "Goku", power: 9500 },
    { name: "Vegeta", power: 9000 },
  ];
}

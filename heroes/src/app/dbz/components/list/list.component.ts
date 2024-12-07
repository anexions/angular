import { Component, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()    //con esto vamos a pasar lo que hay debajo a otro lugar del exterior. Si se deja vacio en los parentesis se llamara characterList.
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
}]

}

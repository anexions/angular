import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["spiderman","hulk","ironman","thor"]
  public deleteHero?: string;

  //Eliminar el ultimo heroe del array

  removeLastHeroe():void {
    this.deleteHero = this.heroNames.pop();
  }

}

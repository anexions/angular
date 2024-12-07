import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizeName(): string {
    //metodo que tambien se puede interporlar mediante {{}}
    return this.name.toUpperCase();
  }

  getHerodescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //cambiar nombre

  changeName(): void {
    this.name = 'spiderman';
  }

  //cambiar edad

  changeAge(): void {
    this.age = 25;
  }

  //Resetear formulario

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}

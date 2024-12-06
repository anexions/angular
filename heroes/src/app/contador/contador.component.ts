import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <p>Pulsa en los botones para sumar o restar 1.</p>

    {{ contador }}
    <hr />

    <button (click)="cambiarValor(1)">+1</button>
    <button (click)="cambiarValor(-1)">-1</button>
    <button (click)="reset()">Reset a 10.</button>
  `,
})
export class contadorComponent {
  public title: string = 'heroes';
  public contador: number = 10;

  //sumar uno o restar

  cambiarValor(value: number): void {
    this.contador += value;
  }

  //Ajustar el valor a 10

  reset(): void {
    this.contador = 10;
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = []; //El carrito será un array de productos usando el modelo Product importado en la linea 2.

  constructor() {}

  //Diferentes métodos:

  //Añadir al carrito

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  //Ver el carro

  getCart(): Product[] {
    return this.cart;
  }

  //Vaciar el carrito

  clearCart(): void {
    this.cart = [];
  }

  //Ver el total

  getTotal (): number {

    return this.cart.reduce((sum, product) => sum + product.price, 0)

  }

}

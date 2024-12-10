import { Injectable } from '@angular/core';
import { Product } from '../models/product'; //El modelo que usará nuestros objetos.

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    //Productos que van dentro de un array que tiene objetos en su interior.

    {
      id: 1,
      name: 'Camiseta Angular',
      price: 19.99,
      description: 'Camiseta con el logo de Angular',
      imageUrl: 'assets/images/angular-shirt.jpg',
    },
    {
      id: 2,
      name: 'Gorra Angular',
      price: 15.99,
      description: 'Gorra con el logo de Angular',
      imageUrl: 'assets/images/angular-hat.jpg',
    },
    {
      id: 3,
      name: 'Taza Angular',
      price: 9.99,
      description: 'Taza con el logo de Angular',
      imageUrl: 'assets/images/angular-mug.jpg',
    },
  ];

  constructor() {}

  //Funcion para obtener una lista de todos los productos.

  getProducts(): Product[] {
    return this.products;
  }

  //Funcion para buscar un producto por id

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);  //.find buscará en el array de Product el que corresponda con el id.
  }
}

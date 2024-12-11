import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService // Inyectamos el servicio del carrito
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // Usamos el servicio para agregar un producto al carrito
  addToCart(product: Product): void {
    this.cartService.addToCart(product); // Llamamos a la función del servicio
    alert(`${product.name} añadido al carrito.`);
  }
}

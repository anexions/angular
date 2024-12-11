import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // Importa CartService
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Asegúrate de incluir CommonModule aquí
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup; // Formulario para crear productos

  constructor(
    private productService: ProductService, // Servicio de productos
    private cartService: CartService, // Inyección del servicio del carrito
    private fb: FormBuilder // FormBuilder para formularios reactivos
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts(); // Inicializa los productos
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1, // Genera un ID basado en la longitud del array
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imageUrl: 'assets/images/default.jpg', // Imagen por defecto
      };

      this.productService.addProduct(newProduct); // Llama al método del servicio
      this.products = this.productService.getProducts(); // Actualiza la lista local
      this.productForm.reset(); // Resetea el formulario después de añadir el producto
    } else {
      alert('Por favor, completa todos los campos antes de añadir un producto.');
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); // Llamamos a la función del servicio
    alert(`${product.name} añadido al carrito.`);
  }
}

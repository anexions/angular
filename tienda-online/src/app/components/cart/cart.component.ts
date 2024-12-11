import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Datos de compra:', this.checkoutForm.value);
      alert(`Gracias por su compra, ${this.checkoutForm.value.name}!`);
      this.cartService.clearCart();
      this.cart = [];
      this.total = 0;
      this.checkoutForm.reset();
    }
  }

  // Método para vaciar el carrito
  clearCart(): void {
    this.cartService.clearCart(); // Limpia el carrito en el servicio
    this.cart = this.cartService.getCart(); // Actualiza la lista local del carrito
    this.total = this.cartService.getTotal(); // Recalcula el total
  }
}

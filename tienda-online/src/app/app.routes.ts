import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // Ruta raíz
  { path: 'product/:id', component: ProductDetailComponent }, // Ruta dinámica
  { path: 'cart', component: CartComponent } // Ruta para carrito
];


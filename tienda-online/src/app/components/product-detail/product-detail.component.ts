import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  //se iniciará al inicio de la pagina
  product: Product | undefined; //devolvera o el array de productos o udefined

  constructor(
    private route: ActivatedRoute, //solo se podrá acceder a la web a traves del articulo en si.
    private productService: ProductService, //inyecta productService. Si miramos en ese archivo, está la logica para obtener los productos.
    private cartService: CartService //inyecta cartService que si miramos el archivo te la la logica para vaciar el carro, llenarlo etc...
  ) {}

  ngOnInit(): void {
    //Lo que va a iniciar cuando ejecute el componente.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Producto añadido al carrito');
  }
}

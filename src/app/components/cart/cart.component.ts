import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartListService } from 'src/app/services/cart-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = []

  constructor(private cartService: CartListService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart()
  }

  removeProduct(product: Product): void {
    this.cartList = this.cartService.removeFromCart(product)
  }

}

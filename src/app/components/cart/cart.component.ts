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
  totalPrice: number = 0

  constructor(private cartService: CartListService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart()
    this.totalPrice = this.cartList.reduce((acc,cval) => {
      return acc + (cval.price * cval.selectedAmount!)
    }, 0)
  }

  removeItem(product: Product): void {
    this.cartList = this.cartService.removeFromCart(product)
    this.totalPrice -= product.price * product.selectedAmount!
  }

}

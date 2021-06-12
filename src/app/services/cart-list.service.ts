import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  cartList: Product[] = []

  constructor() { }

  getCart(): Product[]{
    return this.cartList
  }

  addToCart(product: Product): void {
    this.cartList.push(product)
  }

  removeFromCart(product: Product): void {
    this.cartList = this.cartList.filter(p => p.id !== product.id)
  }

  clearCart(): Product[] {
    this.cartList = []
    return this.cartList
  }
}

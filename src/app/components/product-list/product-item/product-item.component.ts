import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
import { CartListService } from 'src/app/services/cart-list.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter
  path: string
  availableAmounts: number[] = []
  selectedAmount: number = 0

  constructor(private cartService: CartListService, private router: Router) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
      selectedAmount: 0
    }
    this.path = router.url
  }

  ngOnInit(): void {
    this.availableAmounts = [...Array(this.productItem.availableAmount).keys()].map(i => i+1)
  }

  addToCart(productItem: Product): void {
    this.productItem.selectedAmount = this.selectedAmount
    this.cartService.addToCart(productItem)
    alert(`${this.selectedAmount} of ${this.productItem.name} added to the cart!`)
  }

  removeFromCart(productItem: Product): void {
    this.removeProduct.emit(productItem)
  }

}

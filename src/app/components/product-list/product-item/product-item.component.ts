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

  constructor(private cartService: CartListService, private router: Router) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '' 
    }
    this.path = router.url
  }

  ngOnInit(): void {
  }

  addToCart(productItem: Product): void {
    this.cartService.addToCart(productItem)
  }

  removeFromCart(productItem: Product): void {
    this.removeProduct.emit(productItem)
  }

}

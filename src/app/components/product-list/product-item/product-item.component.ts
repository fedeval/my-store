import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
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
  selectedAmount: number = 0

  constructor(private router: Router) {
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
    
  }

  removeFromCart(productItem: Product): void {
    this.removeProduct.emit(productItem)
  }

}

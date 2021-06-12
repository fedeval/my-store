import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartListService } from 'src/app/services/cart-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product

  constructor(private cartService: CartListService) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '' 
    }
  }

  ngOnInit(): void {
  }

  addToCart(productItem: Product): void {
    this.cartService.addToCart(productItem)
  }

}

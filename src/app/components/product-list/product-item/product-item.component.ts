import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product

  constructor() {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '' 
    }
  }

  ngOnInit(): void {
  }

}

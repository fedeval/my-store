import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartListService } from 'src/app/services/cart-list.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string = ''
  address: string = ''
  cartList: Product[] = []
  totalPrice: number = 0

  constructor(private route: ActivatedRoute, private cartService: CartListService) { }

  ngOnInit(): void {
    this.fullName = this.route.snapshot.paramMap.get('fullName')!;
    this.address = this.route.snapshot.paramMap.get('address')!;
    this.cartList = this.cartService.getCart()
    this.totalPrice = this.cartService.getTotalPrice()
    this.cartService.clearCart()
  }

}

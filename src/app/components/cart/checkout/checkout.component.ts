import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fullName: string = ''
  address: string = ''
  cardNumber: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['confirmation'])
  }

}

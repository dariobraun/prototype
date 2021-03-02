import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { MicroFrontendItem } from '../item.model';

export let cartItemsObs = new BehaviorSubject<MicroFrontendItem[]>([]);
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Observable<MicroFrontendItem[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params['name']);
    });
    this.cartItems = cartItemsObs;
  }
}

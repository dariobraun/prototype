import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { MicroFrontendItem } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  microFrontends: MicroFrontendItem[] = [];
  @Output() itemClicked = new EventEmitter<MicroFrontendItem>();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.microFrontends = this.getMicroFrontends();
  }

  getMicroFrontends(): MicroFrontendItem[] {
    return this.itemService.fetchMicroFrontends();
  }

  async sendItemToCart(mfi: MicroFrontendItem) {
    const cartComp = await import('cart/CartComponent');
    const cartSubject: Subject<MicroFrontendItem[]> = cartComp.cartItemsObs;
    cartSubject.pipe(take(1)).subscribe((current) => {
      current.push(mfi);
      cartSubject.next(current);
    });
  }
}

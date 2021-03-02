import { Injectable } from '@angular/core';
import { MicroFrontendItem } from './item.model';
import { microFrontends } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  fetchMicroFrontends(): MicroFrontendItem[] {
    return microFrontends;
  }

  addToCart(mfi: MicroFrontendItem): void {
    localStorage.setItem('cart', JSON.stringify([mfi]));
  }
}

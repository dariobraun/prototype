import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';


export const CART_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: CartComponent },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(CART_ROUTES)],
})
export class CartModule {}

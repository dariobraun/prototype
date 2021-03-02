import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from '../item/item.component';

export const MENU_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: MenuComponent },
];

@NgModule({
  declarations: [MenuComponent, ItemComponent],
  imports: [CommonModule, RouterModule.forChild(MENU_ROUTES)],
})
export class MenuModule {}

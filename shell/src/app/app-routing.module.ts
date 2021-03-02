import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const SHELL_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'cart',
        exposedModule: './CartModule',
      }).then((m) => m.CartModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('menu/MenuModule').then((m) => m.MenuModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(SHELL_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

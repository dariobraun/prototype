import { BrowserModule } from '@angular/platform-browser';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule,
} from '@angular/core';

import { AppComponent } from './app.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';

@NgModule({
  declarations: [AppComponent, BuyButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<BuyButtonComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(
      BuyButtonComponent
    );
  }
}

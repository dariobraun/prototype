import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-buy-template',
  templateUrl: './buy-template.component.html',
  styleUrls: ['./buy-template.component.scss'],
})
export class BuyTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container?: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.lazyLoadComponent();
  }

  async lazyLoadComponent(): Promise<void> {
    const { BuyButtonComponent } = await import('buy/BuyComponent');
    const cFactory = this.cfr.resolveComponentFactory(BuyButtonComponent);
    this.container?.clear();
    const buyButtonInstance = this.container?.createComponent(cFactory)
      .instance;
    (buyButtonInstance as any).label = 'Buy!';
  }
}

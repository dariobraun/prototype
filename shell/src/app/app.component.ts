import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shell';
  url = '';

  constructor(private router: Router, private renderer: Renderer2) {}

  async ngAfterViewInit(): Promise<void> {
    await import('banner/WebComponent');
    const element = this.renderer.createElement('banner-element');
    document.getElementById('container')!.appendChild(element);
    element.addEventListener('customEvent', (event: any) => {
      this.renderer.setProperty(element, 'bannerText', event.detail);
    });
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.url = window.location.href;
    });
  }

  sendItemToCart(mfi: any) {
    console.log(mfi);
  }
}

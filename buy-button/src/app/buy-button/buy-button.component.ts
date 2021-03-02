import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
})
export class BuyButtonComponent implements OnInit {
  @Input() label = '...';

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('banner:hover', (event: any) => {
      this.label = event.detail.text;
    });
  }

  buyAlert() {
    window.alert('Congratulations! You bought a Framework!');
  }
}

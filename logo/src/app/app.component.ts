import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 #heading (click)="handleClick()">
      {{ bannerText }}
    </h1>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() bannerText = 'Season Sale - 20% Off!';
  @Output() customEvent = new EventEmitter<string>();
  @ViewChild('heading') heading: ElementRef;
  ngOnInit(): void {}

  handleClick() {
    this.customEvent.emit('20% Discount Active');
    this.heading.nativeElement.dispatchEvent(
      new CustomEvent('banner:hover', {
        bubbles: true,
        detail: { text: 'Buy with 20% Off!' },
      })
    );
  }
}

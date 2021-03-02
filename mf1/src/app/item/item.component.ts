import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MicroFrontendItem } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Output() itemClicked = new EventEmitter<MicroFrontendItem>();
  @Input() microFrontendItem: MicroFrontendItem = {
    name: '',
    imgSrc: '',
    descr: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(mfi: MicroFrontendItem): void {
    this.itemClicked.next(mfi);
  }

}

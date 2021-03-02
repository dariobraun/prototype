import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTemplateComponent } from './buy-template.component';

describe('BuyButtonComponent', () => {
  let component: BuyTemplateComponent;
  let fixture: ComponentFixture<BuyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

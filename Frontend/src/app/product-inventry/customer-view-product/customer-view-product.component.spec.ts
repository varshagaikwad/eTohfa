import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewProductComponent } from './customer-view-product.component';

describe('CustomerViewProductComponent', () => {
  let component: CustomerViewProductComponent;
  let fixture: ComponentFixture<CustomerViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

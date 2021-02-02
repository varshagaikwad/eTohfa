import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCategoryComponent } from './get-all-category.component';

describe('GetAllCategoryComponent', () => {
  let component: GetAllCategoryComponent;
  let fixture: ComponentFixture<GetAllCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

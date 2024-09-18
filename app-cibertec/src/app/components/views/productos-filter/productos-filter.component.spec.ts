import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFilterComponent } from './productos-filter.component';

describe('ProductosFilterComponent', () => {
  let component: ProductosFilterComponent;
  let fixture: ComponentFixture<ProductosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

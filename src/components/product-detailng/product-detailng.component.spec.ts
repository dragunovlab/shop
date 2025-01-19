import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailngComponent } from './product-detailng.component';

describe('ProductDetailngComponent', () => {
  let component: ProductDetailngComponent;
  let fixture: ComponentFixture<ProductDetailngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

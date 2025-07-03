import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  let componentInstance: ProductCard;
  let fixture: ComponentFixture<ProductCard>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    componentInstance = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.componentRef.setInput('product', {
      title: 'TITLE',
      description: 'DESC',
      id: 'ID',
      photo: 'plop',
      price: 10,
      stock: 2,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
   const image = nativeElement.querySelector('img');
    expect(image?.src).toContain(componentInstance.product().photo);
  });

  it('should display the product description', () => {
       const anchor = nativeElement.querySelector('.card-link') as HTMLAnchorElement;
    expect(anchor?.textContent).toContain(componentInstance.product().description);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    // Define the required `product` property of the component
    component.product = {
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 10,
      stock: 2,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the product photo as image url', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain(component.product.photo);
  });

  it('It should display the product description', () => {
    const small = fixture.nativeElement.querySelector('small');
    expect(small.textContent).toBe(component.product.description);
  });

  it('It should display the product title', () => {
    const title = (fixture.nativeElement as HTMLElement).querySelector('.card-link');
    expect(title?.textContent).toBe(component.product.title);
  });

  it('It should display the product price', () => {
    const title = (fixture.nativeElement as HTMLElement).querySelector('.card-text');
    expect(title?.textContent).toContain(component.product.price);
  });

  it('It should emit addToBasket event with the given product when the button is clicked', () => {
    const emitSpy = spyOn(component.addToBasket, 'emit');
    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();
    expect(emitSpy).toHaveBeenCalledOnceWith(component.product);
  });
});

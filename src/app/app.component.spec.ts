import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from './components/product/product.component';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.products = [{
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 10,
      stock: 2,
    }];

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the products', () => {
    const productElement = fixture.debugElement.query(By.css('app-product'));
    expect(productElement.properties['product']).toBe(component.products[0]);
  });

  it('It should update the total when "addToBasket" class method is called (Class testing)', () => {
    component.total = 99;
    const productElement = fixture.debugElement.query(By.css('app-product'));
    productElement.triggerEventHandler('addToBasket', component.products[0]);
    fixture.detectChanges();
    
    const header = (fixture.nativeElement as HTMLElement).querySelector('header')?.querySelector('h1');
    expect(header?.textContent).toBe('Bienvenue sur Zenika Ecommerce');
  });

  it('It should update the total when a product emits the "addToBasket" event (DOM testing)', () => {
    component.total = 99;
    component.ajouterAuPanier(component.products[0]);
    expect(component.total).toBe(99 + component.products[0].price);
  });
});
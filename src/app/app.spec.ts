import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { ProductCard } from './components/product-card/product-card';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let appInstance: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    appInstance = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(appInstance).toBeTruthy();
  });

  it('should update the total when a product emits the "addToBasket" event', () => {
    // Given
    appInstance.total = 100;

    // When
    appInstance.ajouterAuPanier(appInstance.products[0]);

    // Then
    expect(appInstance.total).toBe(100 + appInstance.products[0].price);
  });

  it('should display the products', () => {
    const productsDebugElements = fixture.debugElement.queryAll(
      By.directive(ProductCard)
    );

    expect(productsDebugElements).toHaveSize(4);

    productsDebugElements.forEach((productsDebugElement, index) => {
      const productComponent: ProductCard =
        productsDebugElement.componentInstance;

      expect(productComponent.product()).toBe(appInstance.products[index]);
    });
  });
});

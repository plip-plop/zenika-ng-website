import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.token';
import { Product } from './components/product/product';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zenika-ng-website';

  get total() {
    return this.basketService.total;
  }

  products: Product[] = this.catalogService.products;
  // appTitle = inject(APP_TITLE);

  constructor(
    private readonly basketService: BasketService,
    private readonly catalogService: CatalogService,
    @Inject(APP_TITLE) public appTitle: string,
  ) { }

  get hasProductsInStock(): boolean {
    return this.catalogService.hasProductsInStock;
  }

  ajouterAuPanier(product: Product) {
    product.stock--;
  }
}

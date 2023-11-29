import { Component, Inject, OnInit } from '@angular/core';
import { APP_TITLE } from './app.token';
import { Product } from './components/product/product';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zenika-ng-website';

  get total() {
    return this.basketService.total;
  }

  get products() {
    return this.catalogService.products;
  }

  constructor(
    private readonly basketService: BasketService,
    private readonly catalogService: CatalogService,
    @Inject(APP_TITLE) public appTitle: string,
  ) { }

  ngOnInit() {
    this.catalogService.fetchProducts();
  }

  get hasProductsInStock(): boolean {
    return this.catalogService.hasProductsInStock;
  }

  ajouterAuPanier({id}: Product) {
    this.basketService.addItem(id).subscribe(
      () => this.catalogService.decreaseStock(id)
    );
  }
}

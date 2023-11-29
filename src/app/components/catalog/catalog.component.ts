import { Component, Inject } from '@angular/core';
import { APP_TITLE } from 'src/app/app.token';
import { BasketService } from 'src/app/services/basket.service';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
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

  ajouterAuPanier({ id }: Product) {
    this.basketService.addItem(id).subscribe(
      () => this.catalogService.decreaseStock(id)
    );
  }
}

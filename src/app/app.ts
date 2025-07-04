import { Component, inject } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';
import { BasketService } from './services/basket-service';
import { CatalogService } from './services/catalog-service';
import { CurrencyPipe } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  catalogService = inject(CatalogService);
  products = this.catalogService.products;
  hasProductsInStock = this.catalogService.hasProductsInStock;

  basketService = inject(BasketService);
  total = this.basketService.total;

  ajouterAuPanier(produit: Product) {
    this.catalogService.decreaseStock(produit.id);

    const itemAjoute = {
      id: produit.id,
      title: produit.title,
      price: produit.price,
    };

    this.basketService.addItem(itemAjoute);
  }
}

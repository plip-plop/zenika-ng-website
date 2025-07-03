import { Component, computed, inject, signal } from '@angular/core';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';
import { CatalogService } from './services/catalog-service';
import { BasketService } from './services/basket-service';
import { BasketItem } from './services/basket-item';
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu],
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

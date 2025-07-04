import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';
import { BasketService } from './services/basket-service';
import { CatalogService } from './services/catalog-service';

@Component({
  selector: 'app-root',
  imports: [ProductCard, Menu, CurrencyPipe, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  catalogService = inject(CatalogService);
  products = this.catalogService.products;
  hasProductsInStock = this.catalogService.hasProductsInStock;

  basketService = inject(BasketService);
  total = this.basketService.total;
  basket = this.basketService.items;

  ngOnInit(): void {
    this.catalogService.fetchProducts().subscribe({
      next: (success) => console.log(success),
      error: (error) => console.log('Ya une erreur ! ', error),
    });

    this.basketService.fetchBasket().subscribe();
  }

  ajouterAuPanier(produit: Product) {
    this.catalogService.decreaseStock(produit.id);

    const itemAjoute = {
      id: produit.id,
      title: produit.title,
      price: produit.price,
    };

    this.basketService.addItem(itemAjoute).subscribe();
  }
}

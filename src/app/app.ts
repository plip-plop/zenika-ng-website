import { Component } from '@angular/core';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  total = 0;

  products: Product[] = [
    {
      id: 'welsch',
      title: 'Coding the welsch',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-welsch.jpg',
      price: 2000,
      stock: 2,
    },
    {
      id: 'world',
      title: 'Coding the world',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-world.jpg',
      price: 18,
      stock: 1,
    },
    {
      id: 'vador',
      title: 'Duck Vador',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-stars.jpg',
      price: 21,
      stock: 2,
    },
    {
      id: 'snow',
      title: 'Coding the snow',
      description: 'Tee-shirt col rond - Femme',
      photo: '/assets/coding-the-snow.jpg',
      price: 19,
      stock: 2,
    },
  ];

  ajouterAuPanier(produit: Product) {
    this.total += produit.price;
  }
}

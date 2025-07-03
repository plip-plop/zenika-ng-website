import { Component, computed, signal } from '@angular/core';
import { Product } from './components/product';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  total = signal<number>(0);

  products = signal<Product[]>([
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
  ]);

  // get hasProductsInStock(): boolean {
  //   return ;
  // }

  // hasProductsInStock = computed(() => this.products().some((item) => item.stock > 0));
  hasProductsInStock = computed(() =>
    this.products().some(({ stock }) => stock > 0)
  );

  ajouterAuPanier(produit: Product) {
    this.products.update((products) =>
      products.map((product) => {
        if (produit.id === product.id) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );

    this.total.update((total) => total + produit.price);
  }
}

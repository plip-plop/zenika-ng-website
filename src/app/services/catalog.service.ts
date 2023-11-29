import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private _products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  fetchProducts(): void {
    this.httpClient.get<Product[]>('http://localhost:8080/api/products').subscribe(
      products => this._products = products
    )
  }

  get products(): Product[] {
    return this._products;
  }

  get hasProductsInStock(): boolean {
    return this._products.some(({ stock }) => stock > 0);
  }

  decreaseStock(productId: string): boolean {
    const product = this._products.find(({ id }) => id === productId);

    if (!product || product.stock === 0) {
      return false;
    } else {
      product.stock--;
      return true;
    }
  }
}

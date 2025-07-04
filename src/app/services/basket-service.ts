import { computed, inject, Injectable, signal } from '@angular/core';
import { BasketItem } from './basket-item';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  httpClient = inject(HttpClient);

  _items = signal<BasketItem[]>([]);
  items = this._items.asReadonly();

  total = computed<number>(() =>
    this._items().reduce((previous, next) => previous + next.price, 0)
  );

  addItem(item: BasketItem): Observable<BasketItem> {
    const productId = item.id;

    return this.httpClient
      .post<BasketItem>(
        'http://localhost:8080/api/basket',
        { productId: productId }
        // Ou { productId }
      )
      .pipe(tap((item) => this._items.update((items) => [...items, item])));
    // ;
  }

  fetchBasket(): Observable<BasketItem[]> {
    return this.httpClient
      .get<BasketItem[]>('http://localhost:8080/api/basket')
      .pipe(tap((basketItems) => this._items.set(basketItems)));
  }
}

import { computed, Injectable, signal } from '@angular/core';
import { BasketItem } from './basket-item';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  _items = signal<BasketItem[]>([]);
  items = this._items.asReadonly();

  total = computed<number>(() =>
    this._items().reduce((previous, next) => previous + next.price, 0)
  );

  addItem(item: BasketItem): void {
    this._items.update((items) => [...items, item]);
  }
}

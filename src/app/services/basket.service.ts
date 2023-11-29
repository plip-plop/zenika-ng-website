import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { BasketItem } from './basket-item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private _items: BasketItem[] = [];

  constructor() { }

  get items(): BasketItem[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  addItem(item: BasketItem): void {
    this._items.push(item);
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { BasketItem } from './basket-item';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private _items: BasketItem[] = [];

  constructor(private httpClient: HttpClient) { }

  get items(): BasketItem[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }


  addItem(productId: string) : Observable<BasketItem> {
    return this.httpClient.post<BasketItem>('http://localhost:8080/api/basket', { productId })
    .pipe(
      tap(item => this._items.push(item))
    )
  }
}

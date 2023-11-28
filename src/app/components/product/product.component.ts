import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: Product;

  @Output()
  addToBasket = new EventEmitter<Product>();

  public onClick() {
    this.addToBasket.emit(this.product);
  }
}

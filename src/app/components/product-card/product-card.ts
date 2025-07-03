import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  addToBasket = output<Product>();

  onClick() {
    this.addToBasket.emit(this.product());
  }
}

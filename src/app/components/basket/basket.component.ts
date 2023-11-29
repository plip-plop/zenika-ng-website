import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  protected get items() {
    return this.basketService.items;
  }

  protected get total() {
    return this.basketService.total;
  }

  constructor(private basketService : BasketService) { }
}

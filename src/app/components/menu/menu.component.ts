import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private readonly basketService: BasketService) { }

  get nombreItemsBasket(): number {
    return this.basketService.items.length;
  }
}

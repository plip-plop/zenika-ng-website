import { Component, Inject, OnInit } from '@angular/core';
import { APP_TITLE } from './app.token';
import { Product } from './components/product/product';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

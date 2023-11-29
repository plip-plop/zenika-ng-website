import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { basketGuard } from './guards/basket.guard';


const routes: Route[] = [
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [basketGuard]
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: '**',
    component: CatalogComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

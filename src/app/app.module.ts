import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { appTitleProvider } from './app.token';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    CatalogComponent,
    BasketComponent,
    ProductDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    appTitleProvider,
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

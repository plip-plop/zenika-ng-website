import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  public product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    // http://localhost:8080/api/product/:id
    const productid = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get<Product>(`http://localhost:8080/api/products/${productid}`).subscribe(
      response => this.product = response
    )
  }
}

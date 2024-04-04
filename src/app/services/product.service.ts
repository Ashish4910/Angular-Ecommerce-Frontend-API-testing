import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = "http://localhost:8080/api/products";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products));
  }


  getdemo() {
    return this.http.get('http://localhost:8080/api/products');
  }

}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}

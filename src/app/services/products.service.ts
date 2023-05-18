import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProduct[]>(`${environment.base_url}/products`);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${environment.base_url}/products/${id}`);
  }
}

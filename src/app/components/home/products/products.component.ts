import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-home-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: IProduct[] = [];
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }
}

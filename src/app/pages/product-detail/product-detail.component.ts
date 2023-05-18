import { SnackbarService } from './../../services/snackbar.service';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private snackbar: SnackbarService
  ) {}

  loading = false;
  productId = this.route.snapshot.paramMap.get('id');

  product = {} as IProduct;
  selectedImage = 0;

  ngOnInit(): void {
    this.loading = true;
    this.getProduct();
  }

  getProduct() {
    if (!this.productId) {
      this.snackbar.error('Nenhum produto foi selecionado.');
      this.router.navigate(['/']);
      return;
    }

    this.productsService.getProduct(this.productId).subscribe({
      next: (product) => {
        console.log(product);

        this.product = product;
        this.loading = false;
      },
    });
  }
}

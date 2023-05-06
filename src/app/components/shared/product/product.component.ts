import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() idx = 1;

  odd = false;

  ngOnInit(): void {
    this.odd = !(this.idx % 2);
  }
}

import { Component } from '@angular/core';
import { IImage, IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-home-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  images: IImage[] = [
    {
      id: 1,
      url: 'https://picsum.photos/400/400',
      product_id: 1,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
    },
    {
      id: 2,
      url: 'https://picsum.photos/400/400',
      product_id: 2,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
    },
  ];

  products: IProduct[] = [
    {
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
      images: this.images,
      category_id: 1,
      price: 100,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
      id: 1,
    },
    {
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
      images: this.images,
      category_id: 1,
      price: 100,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
      id: 1,
    },
    {
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
      images: this.images,
      category_id: 1,
      price: 100,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
      id: 1,
    },
    {
      name: 'Product 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
      images: this.images,
      category_id: 1,
      price: 100,
      created_at: '2021-08-10T18:00:00.00Z',
      updated_at: '2021-08-10T18:00:00.00Z',
      id: 1,
    },
  ];
}

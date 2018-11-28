import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.fetchProducts().subscribe(data => {
      console.table(data);
      this.products = this.products.concat(data);
    });
  }
}

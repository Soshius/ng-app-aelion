import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductListComponent} from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {

  @ViewChild(ProductListComponent) productList: ProductListComponent;

  constructor() { }

  ngOnInit() {
  }

  addProduct(product) {
    this.productList.products.push(product);
  }
}

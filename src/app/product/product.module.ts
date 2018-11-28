import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDashComponent } from './product-dash/product-dash.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './product.service';
import { PromoDirective } from './directives/promo.directive';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDashComponent,
    ProductFormComponent,
    PromoDirective
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }

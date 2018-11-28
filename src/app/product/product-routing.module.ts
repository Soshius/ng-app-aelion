import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDashComponent} from './product-dash/product-dash.component';
import {AuthGuard} from '../shared/security/guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductDashComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

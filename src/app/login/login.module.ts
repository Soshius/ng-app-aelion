import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import {AuthService} from './auth.service';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }

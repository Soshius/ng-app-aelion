import { NgModule } from '@angular/core';
import {AuthGuard} from './guards/auth.guard';
import {LoginModule} from '../../login/login.module';

@NgModule({
  imports: [
  ],
  providers: [
    AuthGuard
  ]
})
export class SecurityModule { }

import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import {ApiService} from './api.service';
import { TruncPipe } from './pipes/trunc.pipe';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [
    TruncPipe
  ],
  exports: [
    MaterialModule,
    TruncPipe,
    SecurityModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }

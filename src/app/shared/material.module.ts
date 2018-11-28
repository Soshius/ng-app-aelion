import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }

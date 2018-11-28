import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() productAddEvent = new EventEmitter<any>();

  product: any = {
    id: null,
    name: '',
    manufecturer: '',
    description: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // dispatch event
    this.productAddEvent.emit(Object.assign({}, this.product));
  }
}

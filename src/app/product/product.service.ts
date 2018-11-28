import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private api: ApiService) { }

  fetchProducts(): Observable<any> {
    return this.http.get(this.api.route('/product'));
  }
}

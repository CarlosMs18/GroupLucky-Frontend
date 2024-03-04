import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product/product.model';

const API_PRODUCTS_URL = `${environment.apiUrl}/Product`;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProductAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_PRODUCTS_URL}/GetProductsAll`);
  }
}

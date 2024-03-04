import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product/product.model';
import { CreateProduct } from '../../models/product/create-product.model';

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

  createProduct(product : CreateProduct){
    return this.http.post(`${API_PRODUCTS_URL}/ProductSave`,product);
  }

  updateProduct(product : CreateProduct){
    return this.http.put(`${API_PRODUCTS_URL}/UpdateProduct`,product);
  }

  deleteProduc(id :number){
    return this.http.put(`${API_PRODUCTS_URL}/DeleteProduct/${id}`,{})
  }
}

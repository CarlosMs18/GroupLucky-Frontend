
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCategoryAll } from '../../models/category/getCategoryAll.model';
import { CategoryI } from '../../models/category/category.model';

const API_CATEGORIES_URL = `${environment.apiUrl}/Category`;
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http : HttpClient
  ) { }

  getCategoryAll(): Observable<GetCategoryAll[]>{
    return this.http.get<GetCategoryAll[]>(`${API_CATEGORIES_URL}/GetCategoryAll`);
  }

  createCategory(category: GetCategoryAll){
    return this.http.post(`${API_CATEGORIES_URL}/CreateCategory`,category)
  }

  updateCategory(category : CategoryI){
    return this.http.put(`${API_CATEGORIES_URL}/UpdateCategory`,category)
  }
}

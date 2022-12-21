import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiBaseUrl = environment.apiBaseUrl

  constructor(private _http: HttpClient) {
  }

  //get
  public categories() {
    return this._http.get(`${this.apiBaseUrl}/category/`);
  }

  //add category
  public addCategory(category: any) {
    return this._http.post(`${this.apiBaseUrl}/category/`, category)
  }


}

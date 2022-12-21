import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiService = environment.apiBaseUrl

  constructor(private _http: HttpClient) {
  }

  //update user
  public updateUser(user: any): Observable<any> {
    return this._http.put(`${this.apiService}/users/update`, user)
  }

  //add user
  public addUser(user: any): Observable<any> {
    return this._http.post(`${this.apiService}/users/`, user)
  }

}

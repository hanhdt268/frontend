import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private apiBaseUrl = environment.apiBaseUrl

  constructor(private _http: HttpClient) { }

  //current user: which is logged
  public getCurrentUser(){
    return this._http.get(`${this.apiBaseUrl}/current-user`);
  }




  //generate token
  public generateToken(loginDate: any){
    return  this._http.post(`${this.apiBaseUrl}/generate-token`, loginDate);
  }

  //login user: set token in localStorage

  public loginUser(token: any){
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr ==null){
      return false;
    }else {
      return true;
    }
  }

  //logout: remove token from local storage
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //getToken
  public getToken(){
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr = localStorage.getItem('user');
    if (userStr != null){
      return JSON.parse(userStr);
    }else {
      this.logOut();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}

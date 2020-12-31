import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // getUser(registerUserData: {
  //   firstName: string;
  //   lastName: string;
  //   username: string;
  //   email: string;
  //   password: string;
  // }) {
  //   throw new Error('Method not implemented.');
  // }
  private _registerUrl = 'http://localhost:3000/auth/register';
  private _loginUrl = 'http://localhost:3000/auth/login';
  // private _authUrl = 'http://localhost:3000/auth/google';

  constructor(private http: HttpClient) {}
  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  registerCompany(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginCompany(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  // getUser(user: any) {
  //   return this.http.get<any>(this._authUrl, user);
  // }
}

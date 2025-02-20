import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api : string = 'http://localhost:8080'
  constructor(private http : HttpClient) { }

  get(login : string, password : string) {
    return this.http.post<string>(this.api + '/auth', {login : login, password : password}, {observe: 'response'})
    .subscribe(res => {
      console.log(res)
    })
  }
  
  post(user: User) {
    return this.http.post<User>(this.api + '/register', user, {observe: 'response'})
      .subscribe(res => {
        console.log(res)
      })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api : string = "http://localhost:8080"
  constructor(private http : HttpClient) { }

  auth(login : string, password : string) {
    return this.http.post<string>(this.api + "/auth", {login : login, password : password}, {observe: 'response'})
    .pipe(map(res => {
      return {
        body : res.body,
        ok : res.ok
      }
    }))
  }
  
  post(user: User) {
    return this.http.post<User>(this.api + "/auth/register", user, {observe: 'response'})
      .pipe(map(res => {
        return res.ok
      }))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api : string = 'http://localhost:8080'
  constructor(private http : HttpClient) { }

  

}

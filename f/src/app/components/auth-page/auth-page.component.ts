import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [FormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

  constructor (
    private service : AuthService,
    private router : Router
  ) 
  { }

  login : string = "";
  password : string = "";

  sendLogin() {
    let res = this.service.get(this.login, this.password)
    if(!res)
      return;

    this.router.navigate(['/home'])
  }
}

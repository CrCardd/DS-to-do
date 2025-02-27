import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    this.service.auth(this.login, this.password).subscribe(
      (data : {body : any, ok : boolean}) => {
          if(!data.ok)
            return;

          sessionStorage.setItem('token', data.body.token)
          this.router.navigate(['/home'])
        }
    )
  }
}

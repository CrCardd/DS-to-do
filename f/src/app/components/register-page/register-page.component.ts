import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
    constructor (
      private service : AuthService,
      private router : Router
    ) 
    { }
  
    email : string = "";
    username : string = "";
    password : string = "";
  
    sendRegister() {
      let res = this.service.post(
        {
          email : this.email, 
          username : this.username,
          password : this.password,
          tasks : []
        }
      )
      .subscribe(
        (res : boolean) => {
          if(res)
            this.router.navigate(['/'])
        }
      )
    }
}

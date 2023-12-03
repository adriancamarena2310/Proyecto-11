import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private fb   = inject( FormBuilder );
  private AuthService = inject(AuthService);

  public myForm: FormGroup = this.fb.group({
    email:    ['adrian@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.AuthService.login(email, password)
      .subscribe({
        next: ()=> console.log('todo buen'),
        error: (message) => {
          Swal.fire('Error', message, 'error' )
        }
      })

  }

}

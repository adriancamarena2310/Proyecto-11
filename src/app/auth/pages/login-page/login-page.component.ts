import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
    email:    ['', [ Validators.required, Validators.email ]],
    password: [' ', [ Validators.required, Validators.minLength(6) ]],
  });

  login(){
    console.log(this.myForm.value);

    const{email, password}= this.myForm.value;

    this.AuthService.login(email, password)
    .subscribe(success=>{
    console.log(success);

})
  }

}

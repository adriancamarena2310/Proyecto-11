import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
   LoginPageComponent,
   RegisterPageComponent,
   AuthLayoutComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
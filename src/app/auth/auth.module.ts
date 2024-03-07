import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    LayoutPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

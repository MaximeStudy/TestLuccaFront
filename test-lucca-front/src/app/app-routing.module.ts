import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { LogoutComponent } from './authentification/logout/logout.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentification/login', pathMatch: 'full' },
  { path: 'authentification/login', component: LoginComponent},
  { path: 'authentification/logout', component: LogoutComponent},
  { path: 'authentification/signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

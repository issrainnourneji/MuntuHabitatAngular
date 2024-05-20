import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account/activate-account.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { authGuard } from './services/guard/auth.guard';
import { HomeComponent } from './Simulation/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"profil", pathMatch:"full"},
  {path: "login" , component:LoginComponent},
  {path: "register" , component:RegisterComponent},
  {path: "activate-account" , component:ActivateAccountComponent},
  {path: "main" , component:HomeComponent, canActivate : [authGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'registro', component: RegistroMain },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

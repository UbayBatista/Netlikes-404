import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';
import { ForoBody } from './componentes/foro/foro-body/foro-body';
import { Social } from './componentes/Social/social';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'registro', component: RegistroMain },
  { path: 'foro', component: ForoBody },
  { path: 'social', component: Social },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

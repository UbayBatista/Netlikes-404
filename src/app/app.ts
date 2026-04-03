import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';
import { CatalogoBody } from './componentes/catalog-body/catalog-body';
import { PerfilCompleto } from './componentes/perfil-body/perfil-body';
import { ForoBody } from "./componentes/foro/foro-body/foro-body";
import { Social } from './componentes/Social/social';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroMain, CatalogoBody, PerfilCompleto, ForoBody, Social],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NetLikes');
}

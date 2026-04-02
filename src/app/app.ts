import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';
import { CatalogoBody } from './componentes/catalog-body/catalog-body';
import { PerfilCompleto } from './componentes/perfil-body/perfil-body';
import { ForoBody } from "./componentes/foro/foro-body/foro-body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroMain, CatalogoBody, PerfilCompleto, ForoBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NetLikes');
}

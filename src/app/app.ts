import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';
import { CatalogoBody } from './componentes/catalog-body/catalog-body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroMain, CatalogoBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NetLikes');
}

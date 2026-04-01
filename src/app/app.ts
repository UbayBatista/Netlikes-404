import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroMain } from './componentes/registro/registro-main/registro-main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroMain],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NetLikes');
}

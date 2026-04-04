import { Component } from '@angular/core';
import { ListaForos } from '../lista-foros/lista-foros';
import { VentanaChat } from '../ventana-chat/ventana-chat';
import { Header } from '../../header/header';
@Component({
  selector: 'app-foro-body',
  standalone: true,
  imports: [ListaForos, VentanaChat, Header],
  templateUrl: './foro-body.html',
  styleUrl: './foro-body.css'
})
export class ForoBody { 
  foroSeleccionado: boolean = false;

  verChat() {
    this.foroSeleccionado = true;
  }
  volverALista() {
    this.foroSeleccionado = false;
  }
}
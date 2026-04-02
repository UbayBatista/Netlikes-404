import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaForos } from '../lista-foros/lista-foros';
import { VentanaChat } from '../ventana-chat/ventana-chat';

@Component({
  selector: 'app-foro-body',
  standalone: true,
  imports: [CommonModule, ListaForos, VentanaChat],
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
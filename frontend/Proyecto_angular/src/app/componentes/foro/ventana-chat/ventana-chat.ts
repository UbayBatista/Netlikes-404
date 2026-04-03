import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BurbujaMensaje } from '../burbuja-mensaje/burbuja-mensaje';

@Component({
  selector: 'app-ventana-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, BurbujaMensaje],
  templateUrl: './ventana-chat.html',
  styleUrl: './ventana-chat.css'
})
export class VentanaChat {
  @Output() volver = new EventEmitter<void>();

  tituloForo: string = 'Los juegos del hambre';
  nuevoMensaje: string = '';

  mensajes = [
    { texto: '¡Hola a todos! ¿Cuál es vuestra escena favorita?', esMio: false, usuario: 'User123' },
    { texto: 'A mi me encanta cuando Katniss se ofrece como tributo en lugar de su hermana', esMio: true, usuario: 'Yo' },
    { texto: 'Totalmente de acuerdo', esMio: false, usuario: 'Cinefilo99' },
    { texto: 'Pues a mi me gusta la escena de las bayas', esMio: false, usuario: 'User123' },
    { texto: 'Siii, gracias a esa se inicia la revelión', esMio: false, usuario: 'Cinefilo99' },
    { texto: 'A mi me gustó las entrevistas a los tributos', esMio: false, usuario: 'User987' },
    { texto: 'Ojalá hubieran añadido todas así conoceríamos mejor a los participantes', esMio: true, usuario: 'Yo' }
  ];

  ajustarAltura(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  enviarMensaje(textarea: HTMLTextAreaElement) {
    if (this.nuevoMensaje.trim()) {
      console.log('Enviado', this.nuevoMensaje);
      
      this.nuevoMensaje = '';
      textarea.style.height = 'auto';
    }
  }

  irAtras() {
    this.volver.emit();
  }
}
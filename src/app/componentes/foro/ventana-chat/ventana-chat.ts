import { Component } from '@angular/core';
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
  tituloForo: string = 'Los juegos del hambre';
  nuevoMensaje: string = '';

  mensajes = [
    { texto: '¡Hola a todos! ¿Cuál es vuestra escena favorita?', esMio: false, usuario: 'User123' },
    { texto: 'A mi me encanta cuando Katniss se ofrece como tributo en lugar de su hermana', esMio: true, usuario: 'Yo' },
    { texto: 'Totalmente de acuerdo', esMio: false, usuario: 'Cinefilo99' }
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
}
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Notificacion } from '../notificacion/notificacion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buzon-notificaciones',
  imports: [Notificacion, CommonModule],
  templateUrl: './buzon-notificaciones.html',
  styleUrl: './buzon-notificaciones.css',
})
export class BuzonNotificaciones {
  @Input() isOpen: boolean = false;
  notificaciones = [
    { imagen: 'assets/notificacion1.png', mensaje: 'Tienes una nueva solicitud de amistad.' },
    { imagen: 'assets/notificacion2.png', mensaje: 'Tu publicación ha recibido un nuevo comentario.' },
    { imagen: 'assets/notificacion3.png', mensaje: 'Has sido etiquetado en una foto.' },
    { imagen: 'assets/notificacion4.png', mensaje: 'Tu amigo ha publicado una nueva foto.' },
    { imagen: 'assets/notificacion5.png', mensaje: 'Recibiste un nuevo mensaje privado.' },
    { imagen: 'assets/notificacion6.png', mensaje: 'Tu evento próximo está por comenzar.' },
    { imagen: 'assets/notificacion1.png', mensaje: 'Tienes una nueva solicitud de amistad.' },
    { imagen: 'assets/notificacion2.png', mensaje: 'Tu publicación ha recibido un nuevo comentario.' },
    { imagen: 'assets/notificacion3.png', mensaje: 'Has sido etiquetado en una foto.' },
    { imagen: 'assets/notificacion4.png', mensaje: 'Tu amigo ha publicado una nueva foto.' },
    { imagen: 'assets/notificacion5.png', mensaje: 'Recibiste un nuevo mensaje privado.' },
    { imagen: 'assets/notificacion6.png', mensaje: 'Tu evento próximo está por comenzar.' },
  ]

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();   // Avisamos al padre
  }
}

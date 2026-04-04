import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  imports: [],
  templateUrl: './notificacion.html',
  styleUrl: './notificacion.css',
})
export class Notificacion {
  @Input() imagen: string = '';
  @Input() mensaje: string = '';
}


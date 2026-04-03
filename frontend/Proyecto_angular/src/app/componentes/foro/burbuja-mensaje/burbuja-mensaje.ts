import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burbuja-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burbuja-mensaje.html',
  styleUrl: './burbuja-mensaje.css'
})
export class BurbujaMensaje {
  @Input() texto: string = '';
  @Input() usuario: string = '';
  @Input() esMio: boolean = false;
  @Input() hora: string = '12:00';
}
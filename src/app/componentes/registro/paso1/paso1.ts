import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paso1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './paso1.html',
  styleUrls: ['../pasos.css', './paso1.css']
})
export class Paso1 {
  @Output() alSiguiente = new EventEmitter<void>();

  notificarSiguiente() {
    this.alSiguiente.emit();
  }
}
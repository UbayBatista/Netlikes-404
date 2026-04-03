import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-foros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-foros.html',
  styleUrl: './lista-foros.css'
})
export class ListaForos {
  @Output() foroClickeado = new EventEmitter<void>();
  busqueda: string = '';

  peliculasForo = [
    { titulo: 'Los juegos del hambre', activa: true },
    { titulo: 'Vaiana', activa: false },
    { titulo: 'Los juegos del hambre: sinsajo - Parte 2', activa: false },
    { titulo: 'Harry Potter y la piedra filosofal', activa: false },
    { titulo: 'Avatar', activa: false }
  ];
  seleccionarForo(index: number) {
    this.foroClickeado.emit();
    console.log('Cambiando al foro de:', this.peliculasForo[index].titulo);
  }
}
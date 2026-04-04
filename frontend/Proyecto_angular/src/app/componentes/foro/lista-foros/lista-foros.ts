import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-foros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-foros.html',
  styleUrl: './lista-foros.css'
})
export class ListaForos {
  @Output() foroClickeado = new EventEmitter<void>();
  busqueda = signal('');

  peliculasForo = [
    { titulo: 'Los juegos del hambre', activa: true },
    { titulo: 'Vaiana', activa: false },
    { titulo: 'Los juegos del hambre: sinsajo - Parte 2', activa: false },
    { titulo: 'Harry Potter y la piedra filosofal', activa: false },
    { titulo: 'Avatar', activa: false }
  ];
  seleccionarForo(index: number) {
    this.peliculasForo.forEach(p => p.activa = false);
    this.peliculasForo[index].activa = true;
    
    this.foroClickeado.emit();
    console.log('Cambiando al foro de:', this.peliculasForo[index].titulo);
  }
}
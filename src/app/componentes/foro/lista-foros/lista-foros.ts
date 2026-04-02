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
    { titulo: 'Los juegos del hambre', ultimoMensaje: 'Mi personaje favorito es Prim', activa: true },
    { titulo: 'Vaiana', ultimoMensaje: 'Me encantan las canciones', activa: false },
    { titulo: 'Los juegos del hambre: sinsajo - Parte 2', ultimoMensaje: 'Tanto rollo para que se le muera al final la hermana', activa: false },
    { titulo: 'Harry Potter y la piedra filosofal', ultimoMensaje: 'No entiendo como alimentaban al perro de tres cabezas', activa: false },
    { titulo: 'Avatar', ultimoMensaje: 'Visualmente es insuperable', activa: false }
  ];
  seleccionarForo(index: number) {
    //alert('¡Clic detectado en: ' + this.peliculasForo[index].titulo);
    this.foroClickeado.emit();
    console.log('Cambiando al foro de:', this.peliculasForo[index].titulo);
  }
}
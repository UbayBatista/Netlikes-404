import { Component } from '@angular/core';
import { Genero } from "../genero/genero";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-body',
  standalone: true,
  imports: [Genero, CommonModule],
  templateUrl: './catalog-body.html',
  styleUrl: './catalog-body.css',
})
export class CatalogoBody {
  generos = [
  {
    nombre: 'Acción',
    peliculas: [
      { titulo: 'Peli 1', imagen: 'https://www.sonypictures.co.uk/sites/unitedkingdom/files/2020-12/Jumanji-keyArt_1.jpg' },
      { titulo: 'Peli 2', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 3', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 4', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 5', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 6', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 7', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 8', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 9', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Peli 10', imagen: 'https://via.placeholder.com/300x450' }
    ]
  },
  {
    nombre: 'Comedia',
    peliculas: [
      { titulo: 'Comedia 1', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 2', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 3', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 4', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 5', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 6', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 7', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 8', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 9', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Comedia 10', imagen: 'https://via.placeholder.com/300x450' }
    ]
  },
  {
    nombre: 'Drama',
    peliculas: [
      { titulo: 'Drama 1', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 2', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 3', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 4', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 5', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 6', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 7', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 8', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 9', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Drama 10', imagen: 'https://via.placeholder.com/300x450' }
    ]
  },
  {
    nombre: 'Terror',
    peliculas: [
      { titulo: 'Terror 1', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 2', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 3', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 4', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 5', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 6', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 7', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 8', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 9', imagen: 'https://via.placeholder.com/300x450' },
      { titulo: 'Terror 10', imagen: 'https://via.placeholder.com/300x450' }
    ]
  }
];
}

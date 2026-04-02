import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tieneNotificaciones: boolean = true;
  mostrarNotificaciones: boolean = false;
  avatarUrl: string = 'https://i.pravatar.cc/150?img=5';

  toggleNotificaciones() {
    this.mostrarNotificaciones = !this.mostrarNotificaciones;
  }

  irAlPerfil() {
    console.log('Ir al perfil');
  }
}
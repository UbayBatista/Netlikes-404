import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandPanel } from '../../brand-panel/brand-panel';
import { Paso1 } from '../paso1/paso1';
import { Paso2 } from '../paso2/paso2';
import { Paso3 } from '../paso3/paso3';
import { Paso4 } from '../paso4/paso4';

@Component({
  selector: 'app-registro-main',
  standalone: true,
  imports: [CommonModule, BrandPanel, Paso1, Paso2, Paso3, Paso4],
  templateUrl: './registro-main.html',
  styleUrl: './registro-main.css',
})
export class RegistroMain {
    pasoActual: number = 1;

    siguientePaso() {
        if (this.pasoActual < 4) {
            this.pasoActual++;
        }
    }

    anteriorPaso() {
        if (this.pasoActual > 1) {
            this.pasoActual--;
        }
    }

    manejarFinalizacion(generos: string[]) {
    // Aquí se podrá navegar al home cuando exista this.router.navigate(['/home']);
    console.log('Registro finalizado con géneros seleccionados:', generos);}
}
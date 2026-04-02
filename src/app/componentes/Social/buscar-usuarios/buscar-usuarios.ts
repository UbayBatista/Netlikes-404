import { Component, Input } from "@angular/core";

@Component({
    selector: "app-social-buscar-usuario",
    standalone: true,
    templateUrl: "./buscar-usuarios.html",
    styleUrl: "./buscar-usuarios.css"
})
export class Buscarusuario{
    @Input() usuario: string = "Messi";

    listaUsuarios = [1, 2, 3, 4, 5, 6, 7, 8];
}
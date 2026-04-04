import { Component, Input } from "@angular/core";

@Component({
    selector: "app-perfil-header",
    standalone: true,
    templateUrl: "./perfil-header.html",
    styleUrl: "./perfil-header.css"
})
export class Perfilheader{
    @Input() nombreUsuario: string = "Cristiano";
    menuAbierto: boolean = false;

    Menu(){
        this.menuAbierto = !this.menuAbierto;
    }
}
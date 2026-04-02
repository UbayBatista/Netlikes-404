import { Component, Input } from "@angular/core";
import { Buscarusuario } from "./buscar-usuarios/buscar-usuarios";
import { Chats } from "./chats/chats";

@Component({
    selector: "app-social",
    standalone: true,
    imports: [Buscarusuario, Chats],
    templateUrl: "./social.html",
    styleUrl: "./social.css"
})
export class Social{

    modo_seleccionado: string="Buscar Usuario";

    cambiar_modo(nuevo_modo: string){
        this.modo_seleccionado = nuevo_modo;
    }

}
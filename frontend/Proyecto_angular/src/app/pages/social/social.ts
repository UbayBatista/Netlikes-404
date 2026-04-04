import { Component, Input } from "@angular/core";
import { Buscarusuario } from "./buscar-usuarios/buscar-usuarios";
import { Chats } from "./chats/chats";
import { Header } from "../../componentes/header/header";

@Component({
    selector: "app-social",
    standalone: true,
    imports: [Buscarusuario, Chats, Header],
    templateUrl: "./social.html",
    styleUrl: "./social.css"
})
export class Social{

    modo_seleccionado: string="Buscar Usuario";

    cambiar_modo(nuevo_modo: string){
        this.modo_seleccionado = nuevo_modo;
    }

}
import { Component, Input } from "@angular/core";
import { Usuarios } from "./usuarios/usuarios";
import { Mensajes } from "./mensajes/mensajes";
@Component({
    selector: "app-social-chats",
    standalone: true,
    imports: [Usuarios, Mensajes],
    templateUrl: "./chats.html",
    styleUrl: "./chats.css"
})
export class Chats{

}

import { Component, Input } from "@angular/core";


@Component({
    selector: "app-social-chats-usuarios",
    standalone: true,
    templateUrl: "./usuarios.html",
    styleUrl: "./usuarios.css"
})
export class Usuarios{
    @Input() persona: string="Messi"
}
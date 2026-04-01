import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-perfil-componentes',
    standalone: true,
    templateUrl: './perfil-componentes.html',
    styleUrl: './perfil-componentes.css',
})

export class Perfilbody{
    @Input() titulo: string = 'bio';
}
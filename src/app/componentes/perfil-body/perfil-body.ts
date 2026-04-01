import { Component } from "@angular/core";
import {Perfilbody} from "./perfil-componentes/perfil-componentes";
import { Perfilheader } from "./perfil-header/perfil-header";

@Component({
    selector:"app-perfil-completo",
    standalone: true,
    imports: [Perfilbody, Perfilheader],
    templateUrl: "./perfil-body.html"
})
export class PerfilCompleto{
    
}
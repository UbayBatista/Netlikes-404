import { Component } from "@angular/core";
import {Perfilbody} from "./perfil-componentes/perfil-componentes";
import { Perfilheader } from "./perfil-header/perfil-header";
import { Header } from "../../componentes/header/header";

@Component({
    selector:"app-perfil-completo",
    standalone: true,
    imports: [Perfilbody, Perfilheader, Header],
    templateUrl: "./perfil-body.html"
})
export class PerfilCompleto{
    
}
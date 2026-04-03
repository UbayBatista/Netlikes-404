import { Component, Input } from "@angular/core";

interface Mensaje{
    texto: string;
    soyYo: boolean;
}

@Component({
    selector: "app-social-chats-mensajes",
    standalone: true,
    templateUrl: "./mensajes.html",
    styleUrl: "./mensajes.css"
})
export class Mensajes{
    @Input() usuario: string="Cristiano"
    @Input() persona: string="Messi"

    historialMensajes: Mensaje[] = [
        { texto: 'Hola, ¿qué tal?', soyYo: false },
        { texto: '¡Todo bien! Entrenando.', soyYo: true }
    ];

    enviarMensaje(nuevoTexto: string) {
        if (nuevoTexto.trim() !== '') {
            this.historialMensajes.push({
                texto: nuevoTexto,
                soyYo: true 
            });
        }
    }

    ajustarAltura(textarea: HTMLTextAreaElement) {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px';
    }

}
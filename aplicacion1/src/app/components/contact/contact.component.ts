import { Component , OnInit} from '@angular/core';

@Component({
    selector:'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    title = 'Contacto';
    emailContacto: string;

    ngOnInit(){
        console.log("componente contacto iniciado");
    }
    guardarEmail(){
        localStorage.setItem('emailContacto',this.emailContacto);
        
    }
}
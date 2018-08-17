import { Component ,DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html',

})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';
  emailContacto : string;
  ngOnInit(){
    this.emailContacto=localStorage.getItem('emailContacto');

     }
  ngDoCheck(){
    this.emailContacto=localStorage.getItem('emailContacto');

    console.log('metodo docheck lanzado');
  }
  borrarEmail(){
    localStorage.removeItem('emailContacto');//borrar un solo elemento;
    localStorage.clear(); //vaciar todo el localstorage
    this.emailContacto=null;
  }

}

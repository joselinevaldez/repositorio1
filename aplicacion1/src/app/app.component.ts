import { Component ,DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'NGZOO';
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

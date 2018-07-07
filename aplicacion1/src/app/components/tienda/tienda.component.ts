import { Component } from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl : '/tienda.component.html',
  styleUrls: ['/tienda.component.css']
})
export class TiendaComponent {
  public titulo;
  public nombreDelParque: string;
  public nomParque: string;
  constructor(){
      this.titulo="esta es mi tienda";
  }

}
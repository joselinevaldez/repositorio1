import { Component } from '@angular/core';

@Component({
  selector: 'parque',
  templateUrl : '/parque.component.html'
})
export class ParqueComponent {
  public nombre : string;
  public metros : number;
  public vegetacion: string;
  public abierto: boolean;
  constructor(){
      this.nombre= 'parque natural';
      this.metros=450;
      this.vegetacion='Alta';
      this.abierto=true;
  }
}
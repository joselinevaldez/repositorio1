import { Component,Input } from '@angular/core';

@Component({
  selector: 'parque',
  templateUrl : '/parque.component.html',
  styleUrls: ['/parque.component.css']
})
export class ParqueComponent {
 @Input() nombre : string;
 @Input('metros_cuadrados')  metros : number;
 public vegetacion: string;
 public abierto: boolean;

  constructor(){
   this.nombre= 'Parque natural';
   this.metros= 450;
   this.vegetacion = 'Alta'
   this.abierto=true;

  }  
}
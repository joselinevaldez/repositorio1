import { Component,Input ,Output, EventEmitter,OnChanges, SimpleChanges,OnInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'parque',
  templateUrl : '/parque.component.html',
  styleUrls: ['/parque.component.css']
})
export class ParqueComponent implements OnChanges , OnInit, OnDestroy{
 @Input() nombre : string;
 @Input('metros_cuadrados')  metros : number;
 public vegetacion: string;
 public abierto: boolean;
 @Output() pasameLosDatos = new EventEmitter();

  constructor(){
   this.nombre= 'Parque natural';
   this.metros= 450;
   this.vegetacion = 'Alta'
   this.abierto=true;

  }  
 ngOnChanges(changes: SimpleChanges){
  // console.log(changes);
 console.log('existen cambios en las propiedades');
 }
 ngOnInit(){
   console.log('metodo on init lanzado');

 }
 ngOnDestroy(){
  console.log('metodo onDestroy lanzado');

}
 
  emitirEvento(){
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros':this.metros,
      'vegetacion':this.vegetacion,
      'abierto': this.abierto
    });
  }
}
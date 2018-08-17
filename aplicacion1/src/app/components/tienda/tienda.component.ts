import { Component , OnInit} from '@angular/core';
import * as $ from 'jquery'; // importar jquery

@Component({
  selector: 'tienda',
  templateUrl : '/tienda.component.html',
  styleUrls: ['/tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;
  public miParque: string;
  constructor(){
      this.titulo="Esta es mi tienda";
  }
  mostrarNombre(){
    console.log(this.nombreDelParque);
  }
  verDatosParque(event){
    console.log(event);
    this.miParque = event;
  }
  ngOnInit(){
    $('#textojq').hide();
    $('#botonjq').click(function(){
      console.log("click desde jquery");
      $('#textojq').slideToggle();
    });
  }
}
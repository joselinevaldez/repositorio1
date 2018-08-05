import { Component } from '@angular/core';

@Component({
  selector: 'parque',
  templateUrl : '/parque.component.html',
  styleUrls: ['/parque.component.css']
})
export class ParqueComponent {
  nombre : string;
  email : string;
  website: string;
  hobbies: string[];
  showHobbies: boolean;
  constructor(){
      this.nombre= 'Joseline';
      this.email='joselinevg4@gmail.com';
      this.website='https://www.facebook.com';
      this.hobbies=['Programar','jugar','ver tv'];
      this.showHobbies=true;
  }
newHobby(hobby){
 this.hobbies.push(hobby.value);
 hobby.value="";
  return false;
}
toggleHobbies(){
 this.showHobbies= !this.showHobbies;
}
}
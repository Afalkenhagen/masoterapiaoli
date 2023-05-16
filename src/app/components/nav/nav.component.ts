import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

public active : boolean = false


constructor(){
  
}

setActive():void{
  this.active =!this.active
  
}


}



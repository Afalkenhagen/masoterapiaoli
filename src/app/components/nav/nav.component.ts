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


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// hamburger?.addEventListener("click", mobileMenu);
// function mobileMenu() {
//       hamburger?.classList.toggle("active");
//       navMenu?.classList.toggle("active");


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txt = ""; 
	answer = "";
  
  constructor() { }

  ngOnInit() {
  }

 display(val)
 {
 	this.txt = this.txt + val;
 }
 del(){
  this.txt="";
  this.answer="";
 }


 result(txt)
 {
 		//alert(txt);
 		this.answer = eval(txt);
 		this.txt = "";
 }
}
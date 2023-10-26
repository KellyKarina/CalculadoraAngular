import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
 
  displayValue: string = '';

  display(value: string){
    this.displayValue+= value.replace("*", "x").replace("/", "÷")
  }
  calcular(){
    try{
      this.displayValue = eval(this.displayValue.replace("x", "*").replace("÷", "/"));
    }
    catch (erro) {
      this.displayValue = "erro";
    }
  }
  clear(){
    this.displayValue = '';
  }

}

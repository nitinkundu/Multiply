import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

  title = 'Multiply';
  num1: number;
  num2: number;
  result: number;
  
  multiply() {
      this.result = this.num1 * this.num2;
  }

}

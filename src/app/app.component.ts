import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator';
  num1: number;
  num2: number;
  result: number;
  add() {
      this.result = this.num1 + this.num2;
  }
  substract() {
      this.result = this.num1 - this.num2;
  }
  multiply() {
      this.result = this.num1 * this.num2;
  }
  divide() {
      this.result = this.num1 / this.num2;
  }
  square() {
    this.result = this.num1 * this.num1;
  }
  cube() {
  this.result = this.num1 * this.num1 * this.num1;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Multiply';
  num1: number;
  num2: number;
  result: number;
  
  multiply() {
      this.result = this.num1 * this.num2;
  }
}

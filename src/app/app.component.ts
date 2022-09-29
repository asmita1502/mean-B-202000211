import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';
  count = 0;
  number1 =0;
  number2 =0;
  result= 0;
  addition = () => {
    this.result = this.number1 + this.number2;
  }
  listOfNumbers = [12, 25, 33, 45];
  listOfNames = ["Asmita","Angelica","Krishnananda","Samya","Shatabdi","Sneha"];
  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
}

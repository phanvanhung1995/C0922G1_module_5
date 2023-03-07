import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber) + parseInt(secondNumber);
  }

  sub(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber) - parseInt(secondNumber)
  }

  mult(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber) * parseInt(secondNumber)
  }

  share(firstNumber: string, secondNumber: string) {

    if (secondNumber === '0') {
      this.result = "xảy ra lỗi chia hết cho không"
    }else
    this.result = parseInt(firstNumber) / parseInt(secondNumber)
  }
}

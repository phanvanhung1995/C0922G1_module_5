import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() {
  }

  customers: Customer[] = [
    {
      id: 1,
      name: 'phan văn Hùng',
      dateOfBirth: '17 / 7 / 1995',
      gender: 'nam',
      idCard: '187541711',
      phoneNumber: '921093190',
      email: 'phanvanhung1224@gmail.com',
      address: 'nghệ an',
      type:'vip'
    },
    {
      id: 1,
      name: 'phan văn Dũng',
      dateOfBirth: '17 / 7 / 2008',
      gender: 'nam',
      idCard: '187541711',
      phoneNumber: '921093190',
      email: 'phanvanhung1224@gmail.com',
      address: 'nghệ an',
      type:'vip'
    }
  ]

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {Contract} from "../contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor() {
  }

  contracts: Contract[] = [
    {
      id: 1,
      facility: 'villa osean vip',
      customer: 'phan văn hùng',
      starDate: ' 20 / 2 / 2000',
      endDate: ' 23 / 5 / 2005',
      deposit: 10000,
      total: 20000
    },
    {
      id: 1,
      facility: 'villa osean vip',
      customer: 'phan văn hùng',
      starDate: ' 20 / 2 / 2000',
      endDate: ' 23 / 5 / 2005',
      deposit: 10000,
      total: 20000
    },
    {
      id: 1,
      facility: 'villa osean vip',
      customer: 'phan văn hùng',
      starDate: ' 20 / 2 / 2000',
      endDate: ' 23 / 5 / 2005',
      deposit: 10000,
      total: 20000
    }
  ]

  ngOnInit(): void {
  }

}

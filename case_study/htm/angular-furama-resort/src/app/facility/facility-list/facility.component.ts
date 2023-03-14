import {Component, OnInit} from '@angular/core';
import {Facility} from "../facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor() {
  }

  facilitys: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      are: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'có hồ bơi',
      poolArea: 500,
      numberOfFloors: 5,
      rentType: 'month'
    },
    {
      id: 2,
      name: 'Room Twin 01',
      are: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'có hồ bơi',
      poolArea: 500,
      numberOfFloors: 5,
      rentType: 'month'
    }
  ]

  ngOnInit(): void {

  }

}

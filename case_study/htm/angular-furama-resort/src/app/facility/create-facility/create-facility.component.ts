import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  addVilla() {
    document.getElementById("facilityFree").style.display = "none";
    document.getElementById("poolArea").style.display = "inline-block";
    document.getElementById("standardRoom").style.display = "inline-block";
    document.getElementById("descriptionOtherConvenience").style.display = "inline-block";
    document.getElementById("numberOfFloors").style.display = "inline-block";
  }

  addRoom() {
    document.getElementById("poolArea").style.display = "none";
    document.getElementById("facilityFree").style.display = "none";
    document.getElementById("standardRoom").style.display = "inline-block";
    document.getElementById("descriptionOtherConvenience").style.display = "inline-block";
    document.getElementById("numberOfFloors").style.display = "inline-block";
  }

  addHouse() {
    document.getElementById("standardRoom").style.display = "none";
    document.getElementById("descriptionOtherConvenience").style.display = "none";
    document.getElementById("poolArea").style.display = "none";
    document.getElementById("numberOfFloors").style.display = "none";
    document.getElementById("facilityFree").style.display = "inline-block";
  }

}

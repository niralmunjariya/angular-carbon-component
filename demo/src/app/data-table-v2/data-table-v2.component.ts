import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table-v2',
  templateUrl: './data-table-v2.component.html',
  styleUrls: ['./data-table-v2.component.css']
})
export class DataTableV2Component implements OnInit {

  items = [
    {
      name: 'name 1',
      value: 'value 1',
      address: 'This is address',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      name: 'name 2',
      value: 'value 2',
      address: 'This is address',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      name: 'name 3',
      value: 'value 3',
      address: 'This is address',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      name: 'name 4',
      value: 'value 4',
      address: 'This is address',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    },
    {
      name: 'name 5',
      value: 'value 5',
      address: 'This is address',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

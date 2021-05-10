import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  randomString = 'enable';

  constructor() { }

  ngOnInit(): void {
    console.log('something in customer');
    
  }

  changeString() {
    this.randomString = 'disable';     //In the angular default change detection stratergy all the children component will re-render on this change in dom
  }

}

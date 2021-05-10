import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('something in waiter');
  }

  callForWaiterChange(){
    console.log("callForWaiterChange");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('something in manager');      //it will be only called angain after if there is change in @Input 
  }

  callForManagerChange(){
    console.log("callForManagerChange");
  }

}

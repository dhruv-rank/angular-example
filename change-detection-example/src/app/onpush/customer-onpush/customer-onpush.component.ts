import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-customer-onpush',
  templateUrl: './customer-onpush.component.html',
  styleUrls: ['./customer-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  // it will change dom if any refrence is changed not value     //it will not affect ChangeDetectionStrategy of child
  
})
export class CustomerOnpushComponent implements OnInit {

  randomString:any[]= ['enable','mutable'];

  constructor(private changeDetector: ChangeDetectorRef) { }
 
  ngOnInit(): void {
    console.log('something in customer onPush');
    
  }

  changeString() {
    this.randomString.push(['disable']);  //this will not change dom because value is changed
    this.changeDetector.markForCheck();
  }

  changeStringReference(){
    this.randomString= ['disable'];
  }

}

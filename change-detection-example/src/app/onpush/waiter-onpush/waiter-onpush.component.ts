                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-waiter-onpush',
  templateUrl: './waiter-onpush.component.html',
  styleUrls: ['./waiter-onpush.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class WaiterOnpushComponent implements OnInit {

  randonString = 'enable';
  randomNumber:any[] = [10];
  randomColor = 'Purple';
  randomeSecondColor;
  time:any;
  constructor(private changeDetector: ChangeDetectorRef,private zone: NgZone) {
     
    //  this.changeDetector.detach();  //this component is removed from change detection process of angular

    //  this.changeDetector.reattach(); //reattach component which is detached eariler
  }



  ngOnInit(): void {
    console.log('something in waiter onPush');

  //when the below code is removed from angular zone rest of code is still part of angular zone and also part of angular default change detection
   this.zone.runOutsideAngular(()=>{               //component is removed from angular so it will not be part of angular default change detection
     setInterval(()=>{
       this.randomNumber= [Math.random()*1000];
       this.changeDetector.detectChanges();    //without this line angular will run change detection after the component detached from change detection 
      },1000);
    })

    setInterval(()=>{
      this.randomeSecondColor = this.randomColor;
      this.changeDetector.markForCheck();
    },1000);
  }
  
  callForWaiterChange() {
    console.log("callForWaiterChange onPush");
  }

  chanegBywaiter(){
    this.randomNumber.push(29);
    console.log(this.randomNumber.toString());
    // this.changeDetector.markForCheck();

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-life-cycle';


  bikeSmokeColourFromParent= 'red';
  bikeTyreSizeFromParent = 50;
  arraySize=1;
  
  createArray(arraySize){
    return new Array(arraySize);
  }

  increamentArrayLength(){
    this.arraySize+= 1;
  }

  decreamentArrayLength(){
    this.arraySize-= 1;
  }
}

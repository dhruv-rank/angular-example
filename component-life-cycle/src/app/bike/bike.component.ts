import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
})
export class BikeComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() bikeSmokeColour: String;
  @Input() bikeTyreSize:any;

  alert =
    'please put debugger in chrome at start of every method to get better idea of life-cycle';

  componentsOfBike = ['lights', 'brakes'];

  constructor() {
    // alert(this.alert);
    console.log(
      'bike is assembled at here for the angular when bike is required for first time'
    );
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('these are the changes in @Input', change);
    console.log(
      'bike will check for any change whenever in @Input will change from outside or from parent component',
      'In this example this method will call whenver someone from  outside change '
    );
  }

  ngOnInit(): void {
    console.log('bike is started here and bike will running now onwards');
  }

  ngAfterContentInit() {
    console.log(
      'bike is checking for any gift given from parent',
      'In general it is checking for value to put in <ng-content>'
    );
  }

  ngAfterContentChecked() {
    console.log(
      'bike has accepted all gifts from parent',
      'all the <ng-content> are filled up by the values parent has given'
    );
  }

  ngAfterViewInit() {
    console.log('bike is starting its view in html');
  }

  ngAfterViewChecked() {
    console.log(
      'now bike has completed its view of html and you can see totally completed component in browser'
    );
  }

  ngOnDestroy() {
    console.log('now bike will go to dustbin',
    'component is destroyed'
    );
  }
}

import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-manager-onpush',
  templateUrl: './manager-onpush.component.html',
  styleUrls: ['./manager-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush   //now it's dom will change if there is any @Input is changed

})
export class ManagerOnpushComponent implements OnInit {

  @Input() randomString;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('something in manager onPush');
  }

  callForManagerChange() {
    this.randomString = 'disable';
    console.log("callForManagerChange onPush");
  }

  changeForOnPush() {
    this.randomString = 'angain enable';
  }

}

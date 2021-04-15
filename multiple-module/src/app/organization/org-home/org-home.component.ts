import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-org-home',
  templateUrl: './org-home.component.html',
  styleUrls: ['./org-home.component.scss'],
  encapsulation:ViewEncapsulation.None   // please show the behaviour of this line   
})
export class OrgHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

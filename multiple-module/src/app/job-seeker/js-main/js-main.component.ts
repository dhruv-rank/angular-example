import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-js-main',
  templateUrl: './js-main.component.html',
  styleUrls: ['./js-main.component.scss']
})
export class JsMainComponent implements OnInit {

  constructor(private notificationService:NotificationService) { }

  ngOnInit(): void {
  }

}

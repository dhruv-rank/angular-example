import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-org-main',
  templateUrl: './org-main.component.html',
  styleUrls: ['./org-main.component.scss']
})
export class OrgMainComponent implements OnInit {

  constructor(private notificationService:NotificationService) { }

buttonClasses = "btn btn-secondary m-3";
ApplyBoldClass = false;
  ngOnInit(): void {
  }

}

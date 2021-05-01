import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-org-main',
  templateUrl: './org-main.component.html',
  styleUrls: ['./org-main.component.scss']
})
export class OrgMainComponent implements OnInit {

  constructor(private notificationService:NotificationService) { }

  ngOnInit(): void {
  }

}

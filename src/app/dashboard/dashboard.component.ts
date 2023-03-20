import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routerTitle = 'Routing Test';
  pageName = 'app.client-dashboard.launchpad';
  // selectedTabIndex: number = 0;
  ngOnInit() {
    const x = 'Routing Testst';
  }
}

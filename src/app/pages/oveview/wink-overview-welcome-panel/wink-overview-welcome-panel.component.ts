import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wink-overview-welcome-panel',
  templateUrl: './wink-overview-welcome-panel.component.html',
  styleUrls: ['./wink-overview-welcome-panel.component.less']
})
export class WinkOverviewWelcomePanelComponent implements OnInit {


  imageURL = 'assets/images/user.png';

  userName = 'lms';

  projectName = '测试项目';

  projectDescription = '当前项目为: ';

  usedCUNum = 1;
  purchasedCUNum = 10;

  usage = (this.usedCUNum * 100 * 1.00 / this.purchasedCUNum).toFixed(2);

  leftUsageDays = 10;

  resourceNotification = '剩余可用时间不足' + this.leftUsageDays.toString() + '天，请尽快续费';

  constructor() {
  }

  ngOnInit() {
  }

}

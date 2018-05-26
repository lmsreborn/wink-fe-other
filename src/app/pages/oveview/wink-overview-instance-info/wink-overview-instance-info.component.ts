import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wink-overview-instance-info',
  templateUrl: './wink-overview-instance-info.component.html',
  styleUrls: ['./wink-overview-instance-info.component.less']
})
export class WinkOverviewInstanceInfoComponent implements OnInit {

  runningInstanceNum = 0;
  pausedInstanceNum = 1;
  quitInstanceNum = 0;
  allInstanceNum = this.runningInstanceNum + this.pausedInstanceNum + this.quitInstanceNum;

  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}

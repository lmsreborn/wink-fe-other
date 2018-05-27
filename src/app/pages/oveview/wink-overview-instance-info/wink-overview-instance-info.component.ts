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

  // 作业运行情况

  delay = 0;
  startOffset = '2018-05-20 00:00';
  gmtLastOperation = '2018-05-20 00:00';
  resourceSlot = 1;


  dataSet = [
    {
      name: 'test1',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtLastOperation: '2018-05-20 00:00',
      resourceSlot: 1
    },


    {
      name: 'test2',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtLastOperation: '2018-05-20 00:00',
      resourceSlot: 1
    },

    {
      name: 'test3',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtLastOperation: '2018-05-20 00:00',
      resourceSlot: 1
    }
  ];


  // sort(sort: { key: string, value: string }): void {
  //   this.sortName = sort.key;
  //   this.sortValue = sort.value;
  //   this.search();
  // }

  constructor() {
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-list',
  templateUrl: './wink-operate-instance-list.component.html',
  styleUrls: ['./wink-operate-instance-list.component.less']
})
export class WinkOperateInstanceListComponent implements OnInit {

  runningInstanceNum = 0;
  pausedInstanceNum = 1;
  quitInstanceNum = 0;
  allInstanceNum = this.runningInstanceNum + this.pausedInstanceNum + this.quitInstanceNum;

  // 作业运行情况

  delay = 0;
  startOffset = '2018-05-20 00:00';
  gmtOperator = 'lms395801555';
  resourceSlot = 1;


  instanceListData = [
    {
      name: 'test1',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtOperator: 'lms395801555',
      resourceSlot: 1
    },


    {
      name: 'test2',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtOperator: 'lms395801555',
      resourceSlot: 1
    },

    {
      name: 'test3',
      delay: 0,
      startOffset: '2018-05-20 00:00',
      gmtOperator: 'lms395801555',
      resourceSlot: 1
    }
  ];

  // TODO: 暂停中，停止中，都是蓝色
  statusList = [
    {text: '报错', value: 'error'},
    {text: '未启动', value: 'default'},
    {text: '等待', value: 'warning'},
    {text: '运行', value: 'success'},
    {text: '暂停', value: 'default'},
    {text: '停止', value: 'default'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

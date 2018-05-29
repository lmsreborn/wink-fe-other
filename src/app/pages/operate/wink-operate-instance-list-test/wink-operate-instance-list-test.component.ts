import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-list-test',
  templateUrl: './wink-operate-instance-list-test.component.html',
  styleUrls: ['./wink-operate-instance-list-test.component.less']
})
export class WinkOperateInstanceListTestComponent implements OnInit {

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
    }];

  constructor() { }

  ngOnInit() {
  }

}

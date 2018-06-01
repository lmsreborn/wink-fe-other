import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-dashboard-vertices',
  templateUrl: './wink-operate-instance-dashboard-vertices.component.html',
  styleUrls: ['./wink-operate-instance-dashboard-vertices.component.less']
})
export class WinkOperateInstanceDashboardVerticesComponent implements OnInit {

  subTaskListData = [
    {
      ID: 0,
      queue_in_cnt: '0 (0.00%)',
      queue_out_cnt: '0 (0.00%)',
      num_records_in: 0,
      num_records_out: 0,
      tps: 0,
      retries: 2,
      duration: 82472.384,
      start_time: '2018-06-01 00:13:53',
      stop_time: '-',
      status: 'RUNNING'
    },
    {
      ID: 1,
      queue_in_cnt: '0 (0.00%)',
      queue_out_cnt: '0 (0.00%)',
      num_records_in: 0,
      num_records_out: 0,
      tps: 0,
      retries: 2,
      duration: 82472.384,
      start_time: '2018-06-01 00:13:53',
      stop_time: '-',
      status: 'RUNNING'
    },
    {
      ID: 2,
      queue_in_cnt: '0 (0.00%)',
      queue_out_cnt: '0 (0.00%)',
      num_records_in: 0,
      num_records_out: 0,
      tps: 0,
      retries: 2,
      duration: 82472.384,
      start_time: '2018-06-01 00:13:53',
      stop_time: '-',
      status: 'RUNNING'
    }



  ];


  constructor() { }

  ngOnInit() {
  }

}

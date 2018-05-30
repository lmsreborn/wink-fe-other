import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-dashboard',
  templateUrl: './wink-operate-instance-dashboard.component.html',
  styleUrls: ['./wink-operate-instance-dashboard.component.less']
})
export class WinkOperateInstanceDashboardComponent implements OnInit {

  vertexListData = [
    {
      ID: 0,
      Name: 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.alibaba.blink.streaming.connectors.datahub.sink.DatahubOutputFormat@4f4c789f',
      Status: 'RUNNING',
      InQ_max: '0(0.00%)',
      OutQ_max: '0(0.00%)',
      RecCnt_sum: '0(0.00%)',
      SendCnt_sum: '0(0.00%)',
      TPS_sum: '0(0.00%)',
      Delay_max: '0(0.00%)',
      StartTime: '0(0.00%)',
      Duration: '0(0.00%)',
      TaskNum: 3
    },
    {
      ID: 1,
      Name: 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.al...',
      Status: 'RUNNING',
      InQ_max: '0(0.00%)',
      OutQ_max: '0(0.00%)',
      RecCnt_sum: '0(0.00%)',
      SendCnt_sum: '0(0.00%)',
      TPS_sum: '0(0.00%)',
      Delay_max: '0(0.00%)',
      StartTime: '0(0.00%)',
      Duration: '0(0.00%)',
      TaskNum: 3
    },
    {
      ID: 0,
      Name: 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.al...',
      Status: 'RUNNING',
      InQ_max: '0(0.00%)',
      OutQ_max: '0(0.00%)',
      RecCnt_sum: '0(0.00%)',
      SendCnt_sum: '0(0.00%)',
      TPS_sum: '0(0.00%)',
      Delay_max: '0(0.00%)',
      StartTime: '0(0.00%)',
      Duration: '0(0.00%)',
      TaskNum: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-failover',
  templateUrl: './wink-operate-instance-failover.component.html',
  styleUrls: ['./wink-operate-instance-failover.component.less']
})
export class WinkOperateInstanceFailoverComponent implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'sql'};
  code: string = 'CREATE TABLE result_table (\n' +
    '\tf1             BIGINT,\n' +
    '\tf2             VARCHAR\n' +
    ');\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n' +
    '\n' +
    'INSERT INTO result_table \n' +
    'SELECT * FROM test1 WHERE f1 < 50;';


  index = 0;
  show = false;


  failOverHistory = [
    {
      id: 0,
      Time : '2018-06-06 00:13:42',
      Name : 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.alibaba.blink.streaming.connectors.datahub.sink.DatahubOutputFormat@4f4c789f (1/3)',
      Location : 'g26i01410.cloud.nm89.aliyun.com:32014',
      Attempt : 6,
    },
    // {
    //   id: 1,
    //   Time : '2018-06-06 00:13:42',
    //   Name : 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.alibaba.blink.streaming.connectors.datahub.sink.DatahubOutputFormat@4f4c789f (1/3)',
    //   Location : 'g26i01410.cloud.nm89.aliyun.com:32014',
    //   Attempt : 6,
    // },
    // {
    //   id: 2,
    //   Time : '2018-06-06 00:13:42',
    //   Name : 'Source: DataHubTableSource-inflame-test1 -> SourceParser:DefaultSourceCollector(DataHubTableSource-inflame-test1) -> from: (f1, f2) -> where: (<(f1, 50)), select: (f1, f2) -> to: Tuple2 -> Sink: TupleOutputFormatAdapterSink:com.alibaba.blink.streaming.connectors.datahub.sink.DatahubOutputFormat@4f4c789f (1/3)',
    //   Location : 'g26i01410.cloud.nm89.aliyun.com:32014',
    //   Attempt : 6,
    // }

  ];

  constructor() { }

  updateIndex(index: number) {
    this.index = index;
  }

  showEditor() {
    this.show = true;
  }

  ngOnInit() {
  }

}

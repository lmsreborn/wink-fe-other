import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-ide-right-panel',
  templateUrl: './wink-ide-right-panel.component.html',
  styleUrls: ['./wink-ide-right-panel.component.less']
})
export class WinkIdeRightPanelComponent implements OnInit {
  //
  // // TODO: is this ok to use Array? Or better alternative?
  // topMenus: Array = [
  //   {'anticon-file-add' : '新建'},
  //   {'anticon-copy' : '另存为'},
  //   {'anticon-save' : '保存'},
  //   {'anticon-swap-left' : '撤销'},
  //   {'anticon-swap-right' : '重做'},
  //   {'anticon-play-circle-o' : '调试'},
  //   {'anticon-safety' : '语法检查'},
  //   {'anticon-cloud-upload-o' : '上线'},
  //   {'anticon-play-circle-o' : '运维'}
  //
  // ];
  constructor() { }

  ngOnInit() {
  }


  triggerSave() {
    console.log('heh');
  }
}

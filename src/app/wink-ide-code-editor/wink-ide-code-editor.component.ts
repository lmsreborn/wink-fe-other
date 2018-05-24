import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-ide-code-editor',
  templateUrl: './wink-ide-code-editor.component.html',
  styleUrls: ['./wink-ide-code-editor.component.less']
})
export class WinkIdeCodeEditorComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'sql'};
  code: string = 'CREATE TABLE result_table (\n' +
    '\tf1             BIGINT,\n' +
    '\tf2             VARCHAR\n' +
    ');\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n' +
    '\n' +
    'INSERT INTO result_table \n' +
    'SELECT * FROM test1 WHERE f1 < 50;';
  constructor() { }

  ngOnInit() {
  }

}

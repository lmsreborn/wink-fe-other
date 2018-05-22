import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { WinkMenuComponent } from './wink-menu/wink-menu.component';
import { WinkHeaderComponent } from './wink-header/wink-header.component';
import { WinkSiderComponent } from './wink-sider/wink-sider.component';
import { WinkCardComponent } from './wink-card/wink-card.component';
import { WinkRootLayoutComponent } from './wink-root-layout/wink-root-layout.component';
import { WinkIdeLeftPanelComponent } from './wink-ide-left-panel/wink-ide-left-panel.component';
import { WinkFolderTreeComponent } from './wink-folder-tree/wink-folder-tree.component';
import { WinkIdeTopMenuComponent } from './wink-ide-top-menu/wink-ide-top-menu.component';
import { WinkResizeOpbarComponent } from './wink-resize-opbar/wink-resize-opbar.component';
import { WinkIdeRightPanelComponent } from './wink-ide-right-panel/wink-ide-right-panel.component';
import { WinkIdePreviewPanelComponent } from './wink-ide-preview-panel/wink-ide-preview-panel.component';
import { WinkIdeCodeEditorComponent } from './wink-ide-code-editor/wink-ide-code-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WinkMenuComponent,
    WinkHeaderComponent,
    WinkSiderComponent,
    WinkCardComponent,
    WinkRootLayoutComponent,
    WinkIdeLeftPanelComponent,
    WinkFolderTreeComponent,
    WinkIdeTopMenuComponent,
    WinkResizeOpbarComponent,
    WinkIdeRightPanelComponent,
    WinkIdePreviewPanelComponent,
    WinkIdeCodeEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

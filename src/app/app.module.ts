import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { WinkHeaderComponent } from './wink-header/wink-header.component';
import { WinkRootLayoutComponent } from './wink-root-layout/wink-root-layout.component';
import { WinkIdeLeftPanelComponent } from './pages/develop/wink-ide-left-panel/wink-ide-left-panel.component';
import { WinkFolderTreeComponent } from './pages/develop/wink-folder-tree/wink-folder-tree.component';
import { WinkIdeTopMenuComponent } from './pages/develop/wink-ide-top-menu/wink-ide-top-menu.component';
import { WinkResizeOpbarComponent } from './pages/develop/wink-resize-opbar/wink-resize-opbar.component';
import { WinkIdeRightPanelComponent } from './pages/develop/wink-ide-right-panel/wink-ide-right-panel.component';
import { WinkIdePreviewPanelComponent } from './pages/develop/wink-ide-preview-panel/wink-ide-preview-panel.component';
import { WinkIdeCodeEditorComponent } from './pages/develop/wink-ide-code-editor/wink-ide-code-editor.component';
import { WinkIdeCodeNavigatorComponent } from './pages/develop/wink-ide-code-navigator/wink-ide-code-navigator.component';
import { WinkLeftSideContentComponent } from './pages/develop/wink-left-side-content/wink-left-side-content.component';
import { WinkIdeCodePanelComponent } from './pages/develop/wink-ide-code-panel/wink-ide-code-panel.component';
import { WinkIdeCodeRightSidebarComponent } from './pages/develop/wink-ide-code-right-sidebar/wink-ide-code-right-sidebar.component';
import { WinkOverviewWelcomePanelComponent } from './pages/oveview/wink-overview-welcome-panel/wink-overview-welcome-panel.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WinkHeaderComponent,
    WinkRootLayoutComponent,
    WinkIdeLeftPanelComponent,
    WinkFolderTreeComponent,
    WinkIdeTopMenuComponent,
    WinkResizeOpbarComponent,
    WinkIdeRightPanelComponent,
    WinkIdePreviewPanelComponent,
    WinkIdeCodeEditorComponent,
    WinkIdeCodeNavigatorComponent,
    WinkLeftSideContentComponent,
    WinkIdeCodePanelComponent,
    WinkIdeCodeRightSidebarComponent,
    WinkOverviewWelcomePanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    MonacoEditorModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

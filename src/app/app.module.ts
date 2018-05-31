import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {NgZorroAntdModule} from './shared/ng-zorro-antd.module';
import {NgZorroAntdModule, zh_CN} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {WinkHeaderComponent} from './wink-header/wink-header.component';
import {WinkRootLayoutComponent} from './wink-root-layout/wink-root-layout.component';
import {WinkIdeLeftPanelComponent} from './pages/develop/wink-ide-left-panel/wink-ide-left-panel.component';
import {WinkFolderTreeComponent} from './pages/develop/wink-folder-tree/wink-folder-tree.component';
import {WinkIdeTopMenuComponent} from './pages/develop/wink-ide-top-menu/wink-ide-top-menu.component';
import {WinkResizeOpbarComponent} from './wink-resize-opbar/wink-resize-opbar.component';
import {WinkIdeRightPanelComponent} from './pages/develop/wink-ide-right-panel/wink-ide-right-panel.component';
import {WinkIdePreviewPanelComponent} from './pages/develop/wink-ide-preview-panel/wink-ide-preview-panel.component';
import {WinkIdeCodeEditorComponent} from './pages/develop/wink-ide-code-editor/wink-ide-code-editor.component';
import {WinkIdeCodeNavigatorComponent} from './pages/develop/wink-ide-code-navigator/wink-ide-code-navigator.component';
import {WinkLeftSideContentComponent} from './pages/develop/wink-left-side-content/wink-left-side-content.component';
import {WinkIdeCodePanelComponent} from './pages/develop/wink-ide-code-panel/wink-ide-code-panel.component';
import {WinkIdeCodeRightSidebarComponent} from './pages/develop/wink-ide-code-right-sidebar/wink-ide-code-right-sidebar.component';
import {WinkOverviewWelcomePanelComponent} from './pages/oveview/wink-overview-welcome-panel/wink-overview-welcome-panel.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {WinkOverviewRootContainerComponent} from './pages/oveview/wink-overview-root-container/wink-overview-root-container.component';
import {WinkDevelopRootContainerComponent} from './pages/develop/wink-develop-root-container/wink-develop-root-container.component';
import {RouterModule, Routes} from '@angular/router';
import {WinkOverviewInstanceInfoComponent} from './pages/oveview/wink-overview-instance-info/wink-overview-instance-info.component';
import {WinkOverviewProjectCurveComponent} from './pages/oveview/wink-overview-project-curve/wink-overview-project-curve.component';
import {WinkInstanceStatusBarComponent} from './wink-instance-status-bar/wink-instance-status-bar.component';
import {WinkTimeRangeComponent} from './wink-time-range/wink-time-range.component';
import {WinkOverviewProjectInfoComponent} from './pages/oveview/wink-overview-project-info/wink-overview-project-info.component';
import {WinkOverviewUpgradeInfoComponent} from './pages/oveview/wink-overview-upgrade-info/wink-overview-upgrade-info.component';
import {WinkOverviewUserGuideComponent} from './pages/oveview/wink-overview-user-guide/wink-overview-user-guide.component';
import {WinkOperateRootContainerComponent} from './pages/operate/wink-operate-root-container/wink-operate-root-container.component';
import {WinkOperateInstanceListComponent} from './pages/operate/wink-operate-instance-list/wink-operate-instance-list.component';
import {WinkOperateInstanceActionComponent} from './wink-operate-instance-action/wink-operate-instance-action.component';
import {WinkOperateInstanceDetailComponent} from './pages/operate/wink-operate-instance-detail/wink-operate-instance-detail.component';
import {WinkOperateInstanceListTestComponent} from './pages/operate/wink-operate-instance-list-test/wink-operate-instance-list-test.component';
import {WinkOperateInstanceHeaderComponent} from './pages/operate/wink-operate-instance-header/wink-operate-instance-header.component';
import {WinkOperateInstanceDashboardComponent} from './pages/operate/wink-operate-instance-dashboard/wink-operate-instance-dashboard.component';
import {WinkDagreComponent} from './pages/operate/wink-dagre/wink-dagre.component';
import {WinkSvgContainerComponent} from './pages/operate/wink-svg-container/wink-svg-container.component';
import {WinkOperateInstanceCurveComponent} from './pages/operate/wink-operate-instance-curve/wink-operate-instance-curve.component';
import {WinkCollapseComponent} from './wink-collapse/wink-collapse.component';
import {NZ_I18N, en_US} from 'ng-zorro-antd';
import {WinkEchartsComponent} from './wink-echarts/wink-echarts.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { WinkOperateInstanceDashboardVerticesComponent } from './pages/operate/wink-operate-instance-dashboard-vertices/wink-operate-instance-dashboard-vertices.component';


// TODO: 分离，添加router module
const appRoutes: Routes = [
  {path: 'overview', component: WinkOverviewRootContainerComponent},
  {path: 'develop', component: WinkOperateRootContainerComponent},
  {path: 'operate', component: WinkOperateRootContainerComponent},
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {path: '**', component: WinkOverviewRootContainerComponent}
];


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
    WinkOverviewRootContainerComponent,
    WinkDevelopRootContainerComponent,
    WinkOverviewInstanceInfoComponent,
    WinkOverviewProjectCurveComponent,
    WinkInstanceStatusBarComponent,
    WinkTimeRangeComponent,
    WinkOverviewProjectInfoComponent,
    WinkOverviewUpgradeInfoComponent,
    WinkOverviewUserGuideComponent,
    WinkOperateRootContainerComponent,
    WinkOperateInstanceListComponent,
    WinkOperateInstanceActionComponent,
    WinkOperateInstanceDetailComponent,
    WinkOperateInstanceListTestComponent,
    WinkOperateInstanceHeaderComponent,
    WinkOperateInstanceDashboardComponent,
    WinkDagreComponent,
    WinkSvgContainerComponent,
    WinkOperateInstanceCurveComponent,
    WinkCollapseComponent,
    WinkEchartsComponent,
    WinkOperateInstanceDashboardVerticesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // TODO: BUG, 解决依赖
    // NgZorroAntdModuleX.forRoot(),
    NgZorroAntdModule.forRoot(),
    MonacoEditorModule.forRoot(),
    NgxEchartsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  bootstrap: [AppComponent],
  // providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
  // providers: [NzMeasureScrollbarService]
})
export class AppModule {
}

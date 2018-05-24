import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {WinkDevelopRootContainerComponent} from './pages/develop/wink-develop-root-container/wink-develop-root-container.component';
import {WinkOverviewRootContainerComponent} from './pages/oveview/wink-overview-root-container/wink-overview-root-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

}


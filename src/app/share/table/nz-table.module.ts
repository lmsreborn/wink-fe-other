import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/src/checkbox/nz-checkbox.module';
import { NzDropDownModule } from 'ng-zorro-antd/src/dropdown/nz-dropdown.module';
import { NzI18nModule } from 'ng-zorro-antd/src/i18n/nz-i18n.module';
import { NzMenuModule } from 'ng-zorro-antd/src/menu/nz-menu.module';
import { NzPaginationModule } from 'ng-zorro-antd/src/pagination/nz-pagination.module';
import { NzRadioModule } from 'ng-zorro-antd/src/radio/nz-radio.module';
import { NzSpinModule } from 'ng-zorro-antd/src/spin/nz-spin.module';

import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';

@NgModule({
  declarations: [ NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective ],
  exports     : [ NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective ],
  imports     : [ NzMenuModule, FormsModule, NzRadioModule, NzCheckboxModule, NzDropDownModule, CommonModule, NzPaginationModule, NzSpinModule, NzI18nModule ]
})
export class NzTableModule {
}

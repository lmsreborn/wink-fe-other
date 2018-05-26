import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  NzButtonModule,
  NzCalendarModule,
  NzGridModule,
  NzSwitchModule,
  NzSelectModule,
  NzMenuModule,
  NzMentionModule,
  NzAnchorModule,
  NzAffixModule,
  NzDropDownModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzPaginationModule,
  NzStepsModule,
  NzInputModule,
  NzCheckboxModule,
  NzInputNumberModule,
  NzSliderModule,
  NzRateModule,
  NzBadgeModule,
  NzRadioModule,
  NzAlertModule,
  NzSpinModule,
  NzProgressModule,
  NzTabsModule,
  NzCardModule,
  NzAvatarModule,
  NzTimelineModule,
  NzTimePickerModule,
  NzTransferModule,
  NzCarouselModule,
  NzCollapseModule,
  NzTableModule,
  NzDatePickerModule,
  NzDividerModule,
  NzFormModule,
  NzListModule,
  NzI18nModule,
  NzUploadModule,
  NzAutocompleteModule,
  NzTagModule,
  NzMessageModule,
  NzNotificationModule,
  NzPopoverModule,
  NzToolTipModule,
  NzPopconfirmModule,
  NzModalModule,
  NzBackTopModule,
  NzCascaderModule,
  NzTreeModule,
  NzNotificationService, NzMessageService, NzDropdownService, NgZorroAntdModule
} from 'ng-zorro-antd';

import {NzMeasureScrollbarService} from 'ng-zorro-antd/src/core/services/nz-measure-scrollbar.service';


// TODO: 只拿必须的
@NgModule({
  exports: [
    NzButtonModule,
    NzCalendarModule,
    NzGridModule,
    NzSwitchModule,
    NzSelectModule,
    NzMenuModule,
    NzMentionModule,
    NzAnchorModule,
    NzAffixModule,
    NzDropDownModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzPaginationModule,
    NzStepsModule,
    NzInputModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzSliderModule,
    NzRateModule,
    NzBadgeModule,
    NzRadioModule,
    NzAlertModule,
    NzSpinModule,
    NzProgressModule,
    NzTabsModule,
    NzCardModule,
    NzAvatarModule,
    NzTimelineModule,
    NzTimePickerModule,
    NzTransferModule,
    NzCarouselModule,
    NzCollapseModule,
    NzTableModule,
    NzDatePickerModule,
    NzDividerModule,
    NzFormModule,
    NzListModule,
    NzI18nModule,
    NzUploadModule,
    NzAutocompleteModule,
    NzTagModule,
    NzMessageModule,
    NzNotificationModule,
    NzPopoverModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NzModalModule,
    NzBackTopModule,
    NzCascaderModule,
    NzTreeModule,
    NzTimePickerModule
  ],

  // providers: [ NzMeasureScrollbarService ]
})

export class NgZorroAntdModuleX {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgZorroAntdModule,
      providers: [
        // Services
        NzNotificationService,
        NzMessageService,
        NzDropdownService,
        NzMeasureScrollbarService
      ]
    };
  }
}

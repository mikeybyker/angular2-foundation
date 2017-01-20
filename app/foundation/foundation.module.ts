import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  AccordionComponent,
  PanelComponent,
  BreadcrumbsComponent,
  CalloutComponent,
  CheckSwitchComponent,
  RadioSwitchComponent,
  TabComponent,
  TabsetComponent,
  TabAltComponent,
  TabsetAltComponent
} from './index';

import { DataService } from '../data/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccordionComponent,
    BreadcrumbsComponent,
    CalloutComponent,
    CheckSwitchComponent,
    RadioSwitchComponent,
    TabComponent,
    TabsetComponent,
    PanelComponent,
    TabAltComponent,
    TabsetAltComponent
  ],
  exports: [
    AccordionComponent,
    BreadcrumbsComponent,
    CalloutComponent,
    CheckSwitchComponent,
    RadioSwitchComponent,
    TabComponent,
    TabsetComponent,
    PanelComponent,
    TabAltComponent,
    TabsetAltComponent
  ],
  providers: [DataService]
})
export class FoundationModule { }

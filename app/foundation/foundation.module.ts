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
  TabsetComponent
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
    PanelComponent
  ],
  exports: [
    AccordionComponent,
    BreadcrumbsComponent,
    CalloutComponent,
    CheckSwitchComponent,
    RadioSwitchComponent,
    TabComponent,
    TabsetComponent,
    PanelComponent
  ],
  providers: [DataService]
})
export class FoundationModule { }

import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { AccordionComponent,
         PanelComponent }        from './accordion.component';
import { BreadcrumbsComponent }  from './breadcrumbs.component';
import { CalloutComponent }      from './callout.component';
import { CheckSwitchComponent,
         RadioSwitchComponent }  from './switch.component';
import { TabComponent,
         TabsetComponent }       from './tabs.component';
import { DataService }           from '../data/data.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AccordionComponent,
                  BreadcrumbsComponent,
                  CalloutComponent,
                  CheckSwitchComponent, 
                  RadioSwitchComponent, 
                  TabComponent, 
                  TabsetComponent,
                  PanelComponent                 
                ],
  exports:      [ AccordionComponent,
                  BreadcrumbsComponent,
                  CalloutComponent,
                  CheckSwitchComponent, 
                  RadioSwitchComponent, 
                  TabComponent, 
                  TabsetComponent,
                  PanelComponent
                  
                ],
  providers:    [ DataService ]
})
export class FoundationModule { }

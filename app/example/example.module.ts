import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { FoundationModule }    from '../foundation/foundation.module';
import { ExampleSwitch }       from './example.switch';
import { ExampleTabs }         from './example.tabs';
import { ExampleBreadcrumbs }  from './example.breadcrumbs';
import { ExampleAccordion }    from './example.accordion';
import { ExampleCallout }      from './example.callout';
import { exampleRouting }      from './example.routing';

@NgModule({
  imports: [
    CommonModule,
    FoundationModule,
    exampleRouting
  ],
  declarations: [
    ExampleSwitch,
    ExampleTabs,
    ExampleBreadcrumbs,
    ExampleAccordion,
    ExampleCallout
  ],
  providers: []
})
export class ExampleModule { }

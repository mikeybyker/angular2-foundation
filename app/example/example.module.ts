import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoundationModule } from '../foundation/foundation.module';
import { exampleRouting } from './example.routing'
import {
  ExampleSwitch,
  ExampleTabs,
  ExampleBreadcrumbs,
  ExampleAccordion,
  ExampleCallout
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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

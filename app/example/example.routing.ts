import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ExampleSwitch,
  ExampleTabs,
  ExampleBreadcrumbs,
  ExampleAccordion,
  ExampleCallout
} from './index';
const exampleRoutes: Routes = [
  {
    path: '',
    redirectTo: '/accordion',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    component: ExampleAccordion
  },
  {
    path: 'breadcrumbs',
    component: ExampleBreadcrumbs
  },
  {
    path: 'callout',
    component: ExampleCallout
  },
  {
    path: 'switches',
    component: ExampleSwitch
  },
  {
    path: 'tabs',
    component: ExampleTabs
  }
];

export const exampleRouting: ModuleWithProviders = RouterModule.forChild(exampleRoutes);

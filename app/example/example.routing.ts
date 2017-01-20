import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ExampleSwitch,
  ExampleTabs,
  ExampleTabsAlt,
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
  },
  {
    path: 'tabs-alt',
    component: ExampleTabsAlt
  }
];

export const exampleRouting: ModuleWithProviders = RouterModule.forChild(exampleRoutes);

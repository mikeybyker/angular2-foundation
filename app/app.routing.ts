import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }         from './home.component';
import { ExampleBreadcrumbs }    from './example.breadcrumbs';
import { ExampleCallout }        from './example.callout';
import { ExampleTabs }           from './example.tabs';
import { ExampleSwitch }         from './example.switch';
import { ExampleAccordion }      from './example.accordion';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/home',
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
        path: 'home',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

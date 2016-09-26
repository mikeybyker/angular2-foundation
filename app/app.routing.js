"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var example_breadcrumbs_1 = require('./example.breadcrumbs');
var example_callout_1 = require('./example.callout');
var example_tabs_1 = require('./example.tabs');
var example_switch_1 = require('./example.switch');
var example_accordion_1 = require('./example.accordion');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'accordion',
        component: example_accordion_1.ExampleAccordion
    },
    {
        path: 'breadcrumbs',
        component: example_breadcrumbs_1.ExampleBreadcrumbs
    },
    {
        path: 'callout',
        component: example_callout_1.ExampleCallout
    },
    {
        path: 'switches',
        component: example_switch_1.ExampleSwitch
    },
    {
        path: 'tabs',
        component: example_tabs_1.ExampleTabs
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
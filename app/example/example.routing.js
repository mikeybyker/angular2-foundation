"use strict";
var router_1 = require('@angular/router');
var example_switch_1 = require('./example.switch');
var example_tabs_1 = require('./example.tabs');
var example_breadcrumbs_1 = require('./example.breadcrumbs');
var example_accordion_1 = require('./example.accordion');
var example_callout_1 = require('./example.callout');
var exampleRoutes = [
    {
        path: '',
        redirectTo: '/accordion',
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
    }
];
exports.exampleRouting = router_1.RouterModule.forChild(exampleRoutes);
//# sourceMappingURL=example.routing.js.map
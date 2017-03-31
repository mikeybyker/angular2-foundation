"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./index");
var exampleRoutes = [
    {
        path: '',
        redirectTo: '/accordion',
        pathMatch: 'full'
    },
    {
        path: 'accordion',
        component: index_1.ExampleAccordion
    },
    {
        path: 'breadcrumbs',
        component: index_1.ExampleBreadcrumbs
    },
    {
        path: 'callout',
        component: index_1.ExampleCallout
    },
    {
        path: 'switches',
        component: index_1.ExampleSwitch
    },
    {
        path: 'tabs',
        component: index_1.ExampleTabs
    },
    {
        path: 'tabs-alt',
        component: index_1.ExampleTabsAlt
    }
];
exports.exampleRouting = router_1.RouterModule.forChild(exampleRoutes);
//# sourceMappingURL=example.routing.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var home_component_1 = require('./home.component');
var example_breadcrumbs_1 = require('./example.breadcrumbs');
var example_callout_1 = require('./example.callout');
var example_tabs_1 = require('./example.tabs');
var example_switch_1 = require('./example.switch');
var example_accordion_1 = require('./example.accordion');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2 Foundation Components';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [".router-link-active { background-color: #2199e8; }"],
            template: "\n        <div class=\"top-bar\">\n            <div class=\"top-bar-left\">\n                <ul class=\"menu\">\n                    <li class=\"menu-text\">{{title}}</li>\n                    <li>\n                        <a [routerLink]=\"['Home']\">Home</a>\n                    </li>\n                    <li><a [routerLink]=\"['Accordion']\">Accordion</a></li>\n                    <li><a [routerLink]=\"['Tabs']\">Tabs</a></li>\n                    <li><a [routerLink]=\"['Breadcrumbs']\">Breadcrumbs</a></li>\n                    <li><a [routerLink]=\"['Callout']\">Callout</a></li>\n                    <li><a [routerLink]=\"['Switches']\">Switches</a></li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/accordion',
                name: 'Accordion',
                component: example_accordion_1.ExampleAccordion
            },
            {
                path: '/breadcrumbs',
                name: 'Breadcrumbs',
                component: example_breadcrumbs_1.ExampleBreadcrumbs
            },
            {
                path: '/callout',
                name: 'Callout',
                component: example_callout_1.ExampleCallout
            },
            {
                path: '/switches',
                name: 'Switches',
                component: example_switch_1.ExampleSwitch
            },
            {
                path: '/tabs',
                name: 'Tabs',
                component: example_tabs_1.ExampleTabs
            },
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
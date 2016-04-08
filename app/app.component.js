System.register(['angular2/core', './home.component', './example.breadcrumbs', './example.callout', './example.tabs', './example.switch', './example.accordion', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_component_1, example_breadcrumbs_1, example_callout_1, example_tabs_1, example_switch_1, example_accordion_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (example_breadcrumbs_1_1) {
                example_breadcrumbs_1 = example_breadcrumbs_1_1;
            },
            function (example_callout_1_1) {
                example_callout_1 = example_callout_1_1;
            },
            function (example_tabs_1_1) {
                example_tabs_1 = example_tabs_1_1;
            },
            function (example_switch_1_1) {
                example_switch_1 = example_switch_1_1;
            },
            function (example_accordion_1_1) {
                example_accordion_1 = example_accordion_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular2 Foundation Components';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: [".router-link-active { background-color: #2199e8; }"],
                        template: "\n        <div class=\"top-bar\">\n            <div class=\"top-bar-left\">\n                <ul class=\"menu\">\n                    <li class=\"menu-text\">{{title}}</li>\n                    <li>\n                        <a [routerLink]=\"['Home']\">Home</a>\n                    </li>\n                    <li><a [routerLink]=\"['Accordion']\">Accordion</a></li>\n                    <li><a [routerLink]=\"['Tabs']\">Tabs</a></li>\n                    <li><a [routerLink]=\"['Breadcrumbs']\">Breadcrumbs</a></li>\n                    <li><a [routerLink]=\"['Callout']\">Callout</a></li>\n                    <li><a [routerLink]=\"['Switches']\">Switches</a></li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
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
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
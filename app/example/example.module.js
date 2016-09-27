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
var common_1 = require('@angular/common');
var foundation_module_1 = require('../foundation/foundation.module');
var example_switch_1 = require('./example.switch');
var example_tabs_1 = require('./example.tabs');
var example_breadcrumbs_1 = require('./example.breadcrumbs');
var example_accordion_1 = require('./example.accordion');
var example_callout_1 = require('./example.callout');
var example_routing_1 = require('./example.routing');
var ExampleModule = (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                foundation_module_1.FoundationModule,
                example_routing_1.exampleRouting
            ],
            declarations: [
                example_switch_1.ExampleSwitch,
                example_tabs_1.ExampleTabs,
                example_breadcrumbs_1.ExampleBreadcrumbs,
                example_accordion_1.ExampleAccordion,
                example_callout_1.ExampleCallout
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ExampleModule);
    return ExampleModule;
}());
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=example.module.js.map
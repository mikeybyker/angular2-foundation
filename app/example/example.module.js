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
var forms_1 = require('@angular/forms');
var foundation_module_1 = require('../foundation/foundation.module');
var example_routing_1 = require('./example.routing');
var index_1 = require('./index');
var ExampleModule = (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                foundation_module_1.FoundationModule,
                example_routing_1.exampleRouting
            ],
            declarations: [
                index_1.ExampleSwitch,
                index_1.ExampleTabs,
                index_1.ExampleTabsAlt,
                index_1.ExampleBreadcrumbs,
                index_1.ExampleAccordion,
                index_1.ExampleCallout
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ExampleModule);
    return ExampleModule;
}());
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=example.module.js.map
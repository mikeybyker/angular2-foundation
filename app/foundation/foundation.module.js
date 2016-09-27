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
var accordion_component_1 = require('./accordion.component');
var breadcrumbs_component_1 = require('./breadcrumbs.component');
var callout_component_1 = require('./callout.component');
var switch_component_1 = require('./switch.component');
var tabs_component_1 = require('./tabs.component');
var data_service_1 = require('../data/data.service');
var FoundationModule = (function () {
    function FoundationModule() {
    }
    FoundationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                accordion_component_1.AccordionComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                callout_component_1.CalloutComponent,
                switch_component_1.CheckSwitchComponent,
                switch_component_1.RadioSwitchComponent,
                tabs_component_1.TabComponent,
                tabs_component_1.TabsetComponent,
                accordion_component_1.PanelComponent
            ],
            exports: [
                accordion_component_1.AccordionComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                callout_component_1.CalloutComponent,
                switch_component_1.CheckSwitchComponent,
                switch_component_1.RadioSwitchComponent,
                tabs_component_1.TabComponent,
                tabs_component_1.TabsetComponent,
                accordion_component_1.PanelComponent
            ],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [])
    ], FoundationModule);
    return FoundationModule;
}());
exports.FoundationModule = FoundationModule;
//# sourceMappingURL=foundation.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var data_service_1 = require("../data/data.service");
var FoundationModule = (function () {
    function FoundationModule() {
    }
    return FoundationModule;
}());
FoundationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            index_1.AccordionComponent,
            index_1.BreadcrumbsComponent,
            index_1.CalloutComponent,
            index_1.CheckSwitchComponent,
            index_1.RadioSwitchComponent,
            index_1.TabComponent,
            index_1.TabsetComponent,
            index_1.PanelComponent,
            index_1.TabAltComponent,
            index_1.TabsetAltComponent
        ],
        exports: [
            index_1.AccordionComponent,
            index_1.BreadcrumbsComponent,
            index_1.CalloutComponent,
            index_1.CheckSwitchComponent,
            index_1.RadioSwitchComponent,
            index_1.TabComponent,
            index_1.TabsetComponent,
            index_1.PanelComponent,
            index_1.TabAltComponent,
            index_1.TabsetAltComponent
        ],
        providers: [data_service_1.DataService]
    })
], FoundationModule);
exports.FoundationModule = FoundationModule;
//# sourceMappingURL=foundation.module.js.map
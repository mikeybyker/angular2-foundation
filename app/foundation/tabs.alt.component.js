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
var TabAltComponent = (function () {
    function TabAltComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabAltComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabAltComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], TabAltComponent.prototype, "tabRef", void 0);
    TabAltComponent = __decorate([
        core_1.Component({
            selector: 'tab-alt',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TabAltComponent);
    return TabAltComponent;
}());
exports.TabAltComponent = TabAltComponent;
var TabsetAltComponent = (function () {
    function TabsetAltComponent() {
        this.vertical = false;
    }
    TabsetAltComponent.prototype.ngAfterContentInit = function () {
        var initial = this.tabset.filter(function (tab) { return tab.active; });
        this.tab = initial.length ? initial[0] : this.tabset.first;
    };
    TabsetAltComponent.prototype.onTabClick = function (tab) {
        this.tab = tab;
    };
    TabsetAltComponent.prototype.isSelected = function (tab) {
        return this.tab.name === tab.name;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetAltComponent.prototype, "vertical", void 0);
    __decorate([
        core_1.ContentChildren(TabAltComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabsetAltComponent.prototype, "tabset", void 0);
    TabsetAltComponent = __decorate([
        core_1.Component({
            selector: 'tabset-alt',
            template: "\n    <ul class=\"tabs\" [ngClass]=\"{'vertical': vertical}\">\n      <li class=\"tabs-title\" *ngFor=\"let tab of tabset\" [ngClass]=\"{'is-active': isSelected(tab)}\" (click)=\"onTabClick(tab)\">\n        <a [attr.aria-selected]=\"isSelected(tab)\">{{tab.name}}</a>\n      </li>\n    </ul>\n    <div class=\"tabs-content\">\n      <div class=\"tabs-panel\" [ngClass]=\"{'is-active': tab.tabRef}\">  <!-- overkill -->\n        <template [ngTemplateOutlet]=\"tab.tabRef\"></template>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsetAltComponent);
    return TabsetAltComponent;
}());
exports.TabsetAltComponent = TabsetAltComponent;
//# sourceMappingURL=tabs.alt.component.js.map
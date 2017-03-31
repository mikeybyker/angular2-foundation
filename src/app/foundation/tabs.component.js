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
var core_1 = require("@angular/core");
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    return TabComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
TabComponent = __decorate([
    core_1.Component({
        selector: 'tab',
        template: "\n    <div class=\"tabs-panel\" [class.is-active]=\"active\" [attr.aria-hidden]=\"!active\">\n      <ng-content></ng-content>\n    </div>\n  "
    })
], TabComponent);
exports.TabComponent = TabComponent;
var TabsetComponent = (function () {
    function TabsetComponent() {
    }
    TabsetComponent.prototype.ngAfterContentInit = function () {
        this.tabset.first.active = true;
    };
    TabsetComponent.prototype.setActive = function (tab) {
        this.tabset.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    return TabsetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TabsetComponent.prototype, "vertical", void 0);
__decorate([
    core_1.ContentChildren(TabComponent),
    __metadata("design:type", core_1.QueryList)
], TabsetComponent.prototype, "tabset", void 0);
TabsetComponent = __decorate([
    core_1.Component({
        selector: 'tabset',
        template: "\n    <ul class=\"tabs\" [class.vertical]=\"vertical\">\n      <li *ngFor=\"let tab of tabset\" class=\"tabs-title\" [class.is-active]=\"tab.active\" (click)=\"setActive(tab)\">\n        <a ng-href [class.is-active]=\"tab.active\" [attr.aria-selected]=\"tab.active\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <div class=\"tabs-content\" [class.vertical]=\"vertical\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TabsetComponent);
exports.TabsetComponent = TabsetComponent;
//# sourceMappingURL=tabs.component.js.map
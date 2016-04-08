System.register(['angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var TabComponent, TabsetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent() {
                    this.active = false;
                }
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', String)
                ], TabComponent.prototype, "title", void 0);
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        inputs: ['title'],
                        template: "\n        <div class=\"tabs-panel\" [class.is-active]=\"active\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            }());
            exports_1("TabComponent", TabComponent);
            TabsetComponent = (function () {
                function TabsetComponent(tabs) {
                    this.tabs = tabs;
                }
                TabsetComponent.prototype.ngAfterContentInit = function () {
                    this.tabs.toArray()[0].active = true;
                };
                TabsetComponent.prototype.setActive = function (tab) {
                    this.tabs.toArray().forEach(function (t) { return t.active = false; });
                    tab.active = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], TabsetComponent.prototype, "vertical", void 0);
                TabsetComponent = __decorate([
                    core_1.Component({
                        selector: 'tabset',
                        template: "\n        <ul class=\"tabs\" [class.vertical]=\"vertical\">\n            <li *ngFor=\"#tab of tabs\" class=\"tabs-title\" [class.is-active]=\"tab.active\" (click)=\"setActive(tab)\">\n                <a ng-href [class.is-active]=\"tab.active\" [attr.aria-selected]=\"tab.active\">{{tab.title}}</a>                \n            </li>\n        </ul>\n        <div class=\"tabs-content\" [class.vertical]=\"vertical\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }),
                    __param(0, core_1.Query(TabComponent)), 
                    __metadata('design:paramtypes', [core_1.QueryList])
                ], TabsetComponent);
                return TabsetComponent;
            }());
            exports_1("TabsetComponent", TabsetComponent);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map
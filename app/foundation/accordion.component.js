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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.closeAll = function () {
        this.panels.length && this.panels.toArray().forEach(function (p) { return p.active = false; });
    };
    AccordionComponent.prototype.activate = function (panel) {
        if (!panel) {
            this.closeAll();
            return;
        }
        if (this.multiExpand) {
            // Multi open version: does not close others, click === toggle
            panel.active = !panel.active;
        }
        else {
            // Single open version: does not toggle, always click === open
            this.closeAll();
            panel.active = true;
        }
    };
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return PanelComponent; })), 
        __metadata('design:type', core_1.QueryList)
    ], AccordionComponent.prototype, "panels", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "multiExpand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "allClosed", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'accordion',
            template: "\n        <ul class=\"accordion\">\n            <ng-content></ng-content>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
var PanelComponent = (function () {
    function PanelComponent(accordion) {
        this.accordion = accordion;
        this.active = false;
    }
    PanelComponent.prototype.ngAfterContentInit = function () {
        // Depends which you want to take precedence - allClosed on the accordion, or initial on the panel...
        // I picked, for no good reason, allClosed wins...
        this.active = this.accordion.allClosed ? false : this.active;
    };
    PanelComponent.prototype.clicked = function (event) {
        event.preventDefault();
        this.accordion.activate(this);
    };
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', String)
    ], PanelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('initial'), 
        __metadata('design:type', Boolean)
    ], PanelComponent.prototype, "active", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            selector: 'panel',
            template: "\n        <li class=\"accordion-item\" [class.is-active]=\"active\" (click)=\"clicked($event)\">\n            <a href=\"#\" class=\"accordion-title\" [attr.aria-selected]=\"active\" >{{title}}</a>\n            <div class=\"accordion-content\" [attr.aria-hidden]=\"!active\" [style.display]=\"active ? 'block' : 'none'\">\n                <ng-content></ng-content>\n            </div>\n        </li>\n    "
        }),
        __param(0, core_1.Host()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return AccordionComponent; }))), 
        __metadata('design:paramtypes', [AccordionComponent])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=accordion.component.js.map
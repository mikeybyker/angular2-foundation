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
var platform_browser_1 = require('@angular/platform-browser');
var CheckSwitchComponent = (function () {
    function CheckSwitchComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(CheckSwitchComponent.prototype, "htmlOn", {
        /* Don't really do this! Unsafe. */
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this.onText);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckSwitchComponent.prototype, "htmlOff", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this.offText);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('switch-id'), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "size", void 0);
    __decorate([
        // .tiny, .small, or .large
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CheckSwitchComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input('active-text'), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "onText", void 0);
    __decorate([
        core_1.Input('inactive-text'), 
        __metadata('design:type', String)
    ], CheckSwitchComponent.prototype, "offText", void 0);
    CheckSwitchComponent = __decorate([
        core_1.Component({
            selector: 'check-switch',
            template: "\n    <div class=\"switch\" [ngClass]=\"size\">\n      <input class=\"switch-input\" type=\"checkbox\" id=\"{{id}}\" name=\"{{id}}\" value=\"{{value}}\" [attr.checked] = \"active\">\n      <label class=\"switch-paddle\"  [attr.for] = \"id\">\n        <span class=\"show-for-sr\">{{title}}</span>\n        <span *ngIf=\"onText\" class=\"switch-active\" aria-hidden=\"true\" [innerHTML]=\"htmlOn\"></span>\n        <span *ngIf=\"offText\" class=\"switch-inactive\" aria-hidden=\"true\" [innerHTML]=\"htmlOff\"></span>\n      </label>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], CheckSwitchComponent);
    return CheckSwitchComponent;
}());
exports.CheckSwitchComponent = CheckSwitchComponent;
var RadioSwitchComponent = (function () {
    function RadioSwitchComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(RadioSwitchComponent.prototype, "htmlOn", {
        /* Don't really do this! Unsafe. */
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this.onText);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioSwitchComponent.prototype, "htmlOff", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this.offText);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('switch-id'), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RadioSwitchComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "size", void 0);
    __decorate([
        // .tiny, .small, or .large
        core_1.Input('active-text'), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "onText", void 0);
    __decorate([
        core_1.Input('inactive-text'), 
        __metadata('design:type', String)
    ], RadioSwitchComponent.prototype, "offText", void 0);
    RadioSwitchComponent = __decorate([
        core_1.Component({
            selector: 'radio-switch',
            template: "\n    <div class=\"switch\" [ngClass]=\"size\">\n      <input class=\"switch-input\" type=\"radio\" id=\"{{id}}\" name=\"{{group}}\" value=\"{{value}}\" [attr.checked] = \"active\">\n      <label class=\"switch-paddle\"  [attr.for] = \"id\">\n        <span class=\"show-for-sr\">{{title}}</span>\n        <span *ngIf=\"onText\" class=\"switch-active\" aria-hidden=\"true\" [innerHTML]=\"htmlOn\"></span>\n        <span *ngIf=\"offText\" class=\"switch-inactive\" aria-hidden=\"true\" [innerHTML]=\"htmlOff\"></span>\n      </label>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], RadioSwitchComponent);
    return RadioSwitchComponent;
}());
exports.RadioSwitchComponent = RadioSwitchComponent;
//# sourceMappingURL=switch.component.js.map
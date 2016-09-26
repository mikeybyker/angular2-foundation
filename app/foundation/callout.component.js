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
var CalloutComponent = (function () {
    function CalloutComponent() {
        this.visible = true;
    }
    CalloutComponent.prototype.dismiss = function () {
        this.visible = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CalloutComponent.prototype, "closable", void 0);
    CalloutComponent = __decorate([
        core_1.Component({
            selector: 'callout',
            inputs: ['header', 'modifierClass'],
            template: "\n    <div class=\"callout {{modifierClass}}\" *ngIf=\"visible\">\n      <h5>\n        {{header}}\n      </h5>\n      <p>\n        <ng-content></ng-content>\n      </p>\n      <button *ngIf=\"closable\"\n        class=\"close-button\"\n        aria-label=\"Dismiss alert\"\n        type=\"button\"\n        (click)=\"dismiss()\">\n          <span aria-hidden=\"true\">\u00D7</span>\n      </button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalloutComponent);
    return CalloutComponent;
}());
exports.CalloutComponent = CalloutComponent;
//# sourceMappingURL=callout.component.js.map
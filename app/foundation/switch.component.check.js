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
var forms_1 = require('@angular/forms');
var noop = function () {
};
exports.CHECK_SWITCH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckSwitchComponent; }),
    multi: true
};
var CheckSwitchComponent = (function () {
    function CheckSwitchComponent() {
        // Control Value Accessor will provide values for these...
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this._value = '';
    }
    CheckSwitchComponent.prototype.ngOnInit = function () {
        if (this.active !== undefined) {
            this.checkValue = this.value;
        }
    };
    Object.defineProperty(CheckSwitchComponent.prototype, "checkValue", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CheckSwitchComponent.prototype.writeValue = function (value) {
        if (value !== this._value) {
            this._value = value;
        }
    };
    CheckSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckSwitchComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
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
    ], CheckSwitchComponent.prototype, "name", void 0);
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
    CheckSwitchComponent = __decorate([
        core_1.Component({
            selector: 'check-switch',
            template: "\n    <div class=\"switch\" [ngClass]=\"size\">\n      <input class=\"switch-input\" type=\"checkbox\" id=\"{{id}}\" value=\"{{value}}\" name=\"{{name}}\" (blur)=\"onBlur()\" [(ngModel)]=\"checkValue\">\n      <label class=\"switch-paddle\"  [attr.for] = \"id\">\n        <span class=\"show-for-sr\">{{title}}</span>\n        <span class=\"switch-active\" aria-hidden=\"true\"><ng-content select=\"[activeText]\"></ng-content></span>\n        <span class=\"switch-inactive\" aria-hidden=\"true\"><ng-content select=\"[inActiveText]\"></ng-content></span>\n      </label>\n    </div>\n  ",
            providers: [exports.CHECK_SWITCH_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckSwitchComponent);
    return CheckSwitchComponent;
}());
exports.CheckSwitchComponent = CheckSwitchComponent;
//# sourceMappingURL=switch.component.check.js.map
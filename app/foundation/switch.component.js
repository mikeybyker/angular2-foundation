System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var CheckSwitchComponent, RadioSwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CheckSwitchComponent = (function () {
                function CheckSwitchComponent() {
                }
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
                        directives: [common_1.NgIf],
                        // inputs: ['switchId', 'title', 'size', 'active', 'activeText', 'inactiveText'], // Using @Input()
                        template: "\n        <div class=\"switch\" [ngClass]=\"size\">\n            <input class=\"switch-input\" type=\"checkbox\" id=\"{{id}}\" name=\"{{id}}\" value=\"{{value}}\" [attr.checked] = \"active\">\n            <label class=\"switch-paddle\"  [attr.for] = \"id\">\n                <span class=\"show-for-sr\">{{title}}</span>\n                <span *ngIf=\"onText\" class=\"switch-active\" aria-hidden=\"true\" [innerHTML]=\"onText\"></span>\n                <span *ngIf=\"offText\" class=\"switch-inactive\" aria-hidden=\"true\" [innerHTML]=\"offText\"></span>\n            </label>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckSwitchComponent);
                return CheckSwitchComponent;
            }());
            exports_1("CheckSwitchComponent", CheckSwitchComponent);
            RadioSwitchComponent = (function () {
                function RadioSwitchComponent() {
                }
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
                        directives: [common_1.NgIf],
                        // inputs: ['switchId', 'title', 'value', 'group', 'active', 'activeText', 'inactiveText'], // Using @Input()
                        template: "\n        <div class=\"switch\" [ngClass]=\"size\">\n            <input class=\"switch-input\" type=\"radio\" id=\"{{id}}\" name=\"{{group}}\" value=\"{{value}}\" [attr.checked] = \"active\">\n            <label class=\"switch-paddle\"  [attr.for] = \"id\">\n                <span class=\"show-for-sr\">{{title}}</span>\n                <span *ngIf=\"onText\" class=\"switch-active\" aria-hidden=\"true\" [innerHTML]=\"onText\"></span>\n                <span *ngIf=\"offText\" class=\"switch-inactive\" aria-hidden=\"true\" [innerHTML]=\"offText\"></span>\n            </label>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioSwitchComponent);
                return RadioSwitchComponent;
            }());
            exports_1("RadioSwitchComponent", RadioSwitchComponent);
        }
    }
});
//# sourceMappingURL=switch.component.js.map
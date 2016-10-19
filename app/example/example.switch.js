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
var data_service_1 = require('../data/data.service');
var ExampleSwitch = (function () {
    function ExampleSwitch(_dataService) {
        this._dataService = _dataService;
        this.data = { booze: 'Beer', checks: { beer: true } }; // Default value for the first radio switch, and first checkbox
    }
    ExampleSwitch.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    ExampleSwitch.prototype.getQuestions = function () {
        var _this = this;
        this._dataService.getQuestions()
            .then(function (questions) {
            _this.questions = questions;
        });
    };
    ExampleSwitch.prototype.change = function (event) {
        var _a = event.target, id = _a.id, value = _a.value, checked = _a.checked;
        console.log({ id: id, value: value, checked: checked });
    };
    ExampleSwitch = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foundation-switches',
            templateUrl: './example.switch.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ExampleSwitch);
    return ExampleSwitch;
}());
exports.ExampleSwitch = ExampleSwitch;
//# sourceMappingURL=example.switch.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_data_1 = require("./mock-data");
var index_1 = require("./index");
exports.Artist = index_1.Artist;
exports.Question = index_1.Question;
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getArtists = function () {
        return Promise.resolve(mock_data_1.ARTISTS);
    };
    DataService.prototype.getQuestions = function () {
        return Promise.resolve(mock_data_1.QUESTIONS);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
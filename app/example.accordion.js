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
var accordion_component_1 = require('./foundation/accordion.component');
var data_service_1 = require('./data/data.service');
var ExampleAccordion = (function () {
    function ExampleAccordion(_dataService) {
        this._dataService = _dataService;
    }
    ExampleAccordion.prototype.ngOnInit = function () {
        this.getArtists();
    };
    ExampleAccordion.prototype.getArtists = function () {
        var _this = this;
        this._dataService.getArtists()
            .then(function (artists) {
            _this.artists = artists;
            artists.forEach(function (artist, index, arr) {
                _this.artists[index] = Object.assign({}, artist, { active: index % 2 === 0 });
            });
        });
    };
    ExampleAccordion = __decorate([
        core_1.Component({
            selector: 'accordion-tabs',
            directives: [accordion_component_1.AccordionComponent, accordion_component_1.PanelComponent],
            providers: [data_service_1.DataService],
            template: "\n        <div class=\"row\">\n            <div class=\"small-12columns\">\n                <h4>Accordion</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n\n                <h4 class=\"subheader\">Static Data</h4>\n\n                <accordion [multiExpand]=\"false\" [allClosed]=\"false\">\n                    <panel title=\"The Cure\" [initial]=\"true\">\n                        <div class=\"my-component-content\">The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)</div>\n                    </panel>\n                    <panel title=\"Neutral Milk Hotel\">\n                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n                    </panel>\n                </accordion>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n\n                <h4 class=\"subheader\">Dynamic Data - Allow Multi Expand</h4>\n\n                <accordion [multiExpand]=\"true\" [allClosed]=\"false\">\n                    <panel *ngFor=\"let artist of artists\" [title]=\"artist.name\" [initial]=\"artist.active\">\n                        {{ artist.bio }}\n                    </panel>\n                </accordion>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ExampleAccordion);
    return ExampleAccordion;
}());
exports.ExampleAccordion = ExampleAccordion;
//# sourceMappingURL=example.accordion.js.map
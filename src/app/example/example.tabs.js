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
var data_service_1 = require("../data/data.service");
var ExampleTabs = (function () {
    function ExampleTabs(_dataService) {
        this._dataService = _dataService;
    }
    ExampleTabs.prototype.ngOnInit = function () {
        this.getArtists();
    };
    ExampleTabs.prototype.getArtists = function () {
        var _this = this;
        this._dataService.getArtists()
            .then(function (artists) {
            _this.artists = artists.slice(2); // artists from 3rd item on (hard coded first 2)
        });
    };
    return ExampleTabs;
}());
ExampleTabs = __decorate([
    core_1.Component({
        selector: 'foundation-tabs',
        template: "\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4>Tabs</h4>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4 class=\"subheader\">Horizontal Tabs <small>[First 2 static data, the rest dynamic]</small></h4>\n        <tabset [vertical]=\"false\">\n          <tab title=\"The Cure\">\n            The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)\n          </tab>\n          <tab title=\"Neutral Milk Hotel\">\n            Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n          </tab>\n          <!-- dynamic tabs -->\n          <tab *ngFor=\"let artist of artists\" [title]=\"artist.name\">\n            {{ artist.bio }}\n          </tab>\n        </tabset>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4 class=\"subheader\">Vertical Tabs <small>[static data]</small></h4>\n        <tabset [vertical]=\"true\">\n          <tab title=\"The Cure\">\n            The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)\n          </tab>\n          <tab title=\"Neutral Milk Hotel\">\n            Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ExampleTabs);
exports.ExampleTabs = ExampleTabs;
/*
6.2.4 OK :

.tabs-panel {
  display: none;
  padding: 1rem; }
  .tabs-panel.is-active {
    display: block; }

6.3.0 or 6.3.1 NOT
.tabs-panel {
  display: none;
  padding: 1rem; }
  .tabs-panel[aria-hidden="false"] {
    display: block; }

*/ 
//# sourceMappingURL=example.tabs.js.map
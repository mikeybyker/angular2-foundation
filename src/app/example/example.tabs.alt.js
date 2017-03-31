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
var ExampleTabsAlt = (function () {
    function ExampleTabsAlt() {
    }
    return ExampleTabsAlt;
}());
ExampleTabsAlt = __decorate([
    core_1.Component({
        selector: 'foundation-tabs-alt',
        template: "\n\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4>Tabs - An alternative approach</h4>\n        <p>For static tabs, a template outlet is another way to go...</p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4 class=\"subheader\">Horizontal Tabs</h4>\n        <tabset-alt [vertical]=\"false\">\n          <tab-alt name=\"The Cure\" [tabRef]=\"cure\"></tab-alt>\n          <tab-alt name=\"Neutral Milk Hotel\" [tabRef]=\"neutral\" active=\"true\"></tab-alt>\n        </tabset-alt>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4 class=\"subheader\">Vertical Tabs</h4>        \n          <tabset-alt [vertical]=\"true\">\n            <tab-alt name=\"The Cure\" [tabRef]=\"cure\"></tab-alt>\n            <tab-alt name=\"Neutral Milk Hotel\" [tabRef]=\"neutral\"></tab-alt>\n          </tabset-alt>\n      </div>\n    </div>\n\n\n\n    <!-- Each tab template -->\n    <ng-template #cure>\n      The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)\n    </ng-template>\n    \n    <ng-template #neutral>\n      Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n    </ng-template>\n\n\n  "
    }),
    __metadata("design:paramtypes", [])
], ExampleTabsAlt);
exports.ExampleTabsAlt = ExampleTabsAlt;
//# sourceMappingURL=example.tabs.alt.js.map
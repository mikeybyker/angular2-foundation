System.register(['angular2/core', './foundation/tabs.component', './data/data.service'], function(exports_1, context_1) {
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
    var core_1, tabs_component_1, data_service_1;
    var ExampleTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            ExampleTabs = (function () {
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
                        _this.artists = artists.splice(2); // artists from 3rd item on (hard coded first 2)
                    });
                };
                ExampleTabs = __decorate([
                    core_1.Component({
                        selector: 'foundation-tabs',
                        directives: [tabs_component_1.TabsetComponent, tabs_component_1.TabComponent],
                        providers: [data_service_1.DataService],
                        template: "\n        <div class=\"row\">\n            <div class=\"small-12columns\">\n                <h4>Tabs</h4>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <h4 class=\"subheader\">Horizontal Tabs <small>[First 2 static data, the rest dynamic]</small></h4>\n                <tabset [vertical]=\"false\">\n                    <tab title=\"The Cure\">\n                        The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)\n                    </tab>\n                    <tab title=\"Neutral Milk Hotel\">\n                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n                    </tab>\n                    <!-- dynamic tabs -->\n                    <tab *ngFor=\"#artist of artists\" [title]=\"artist.name\">\n                        {{ artist.bio }}\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <h4 class=\"subheader\">Vertical Tabs <small>[static data]</small></h4>\n                <tabset [vertical]=\"true\">\n                    <tab title=\"The Cure\">\n                        The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)\n                    </tab>\n                    <tab title=\"Neutral Milk Hotel\">\n                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider\n                    </tab>\n                </tabset>\n\n            </div>\n        </div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], ExampleTabs);
                return ExampleTabs;
            }());
            exports_1("ExampleTabs", ExampleTabs);
        }
    }
});
//# sourceMappingURL=example.tabs.js.map
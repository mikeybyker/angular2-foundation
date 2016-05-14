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
var callout_component_1 = require('./foundation/callout.component');
var data_service_1 = require('./data/data.service');
var ExampleCallout = (function () {
    function ExampleCallout(_dataService) {
        this._dataService = _dataService;
        this.artists = [];
        this.colors = ["primary", "secondary", "success", "warning", "alert"];
        this.sizes = ["small", "large", ""];
    }
    ExampleCallout.prototype.ngOnInit = function () {
        this.getArtists();
    };
    // Random element from array : should be in utils/service
    ExampleCallout.prototype.sample = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    // Random boolean : should be in utils/service
    ExampleCallout.prototype.randomBoolean = function () {
        return Math.random() < .5;
    };
    // Random params
    ExampleCallout.prototype.getModifier = function () {
        var c = this.sample(this.colors), s = this.sample(this.sizes), closable = this.randomBoolean();
        return {
            modifierClass: c + ' ' + s,
            closable: closable
        };
    };
    ExampleCallout.prototype.getArtists = function () {
        var _this = this;
        this._dataService.getArtists()
            .then(function (artists) {
            var o = {};
            // Danger! Using Object.assign >> May blow stuff up!
            artists.forEach(function (artist, index, arr) {
                o = Object.assign({}, artist, _this.getModifier());
                _this.artists[index] = o;
            });
        });
    };
    ExampleCallout = __decorate([
        core_1.Component({
            selector: 'foundation-breadcrumbs',
            directives: [callout_component_1.CalloutComponent],
            providers: [data_service_1.DataService],
            template: "\n        <div class=\"row\">\n            <div class=\"small-12columns\">\n                <h4>Callouts</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"medium-12 large-6 columns\">\n                Inputs:\n                <ul>\n                    <li>header : The callout header</li>\n                    <li>modifierClass : any of the Foundation callout modifier classes:\n                        <ul>\n                            <li>Colours: \"primary\", \"secondary\", \"success\", \"warning\", \"alert\"</li>\n                            <li>Size: \"small\", \"large\"</li>\n                        </ul>\n                    </li>\n                    <li>closable : true/false - if the callout has a close button</li>\n                </ul>\n            </div>\n            <div class=\"medium-12 large-6 columns\">\n                <div class=\"callout\">\n                    &lt;callout header=&quot;Your header&quot; modifierClass=&quot;alert&quot; [closable]=&quot;true&quot;&gt;<br>\n                        Your text<br>\n                    &lt;/callout&gt;\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <h4 class=\"subheader\">Static</h4>\n                <callout header=\"The Cure\" modifierClass=\"primary large\" [closable]=\"true\">\n                    The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history.\n                </callout>\n\n                <callout header=\"Neutral Milk Hotel\" modifierClass=\"secondary small\">\n                    Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider.\n                </callout>\n\n                <callout header=\"Modest Mouse\" modifierClass=\"success\">\n                    Modest Mouse is an alternative rock band which formed in 1993 in Issaquah, Washington, United States. The band's original lineup consisted of guitarist Isaac Brock, drummer Jeremiah Green and bassist Eric Judy.\n                </callout>\n\n                <callout header=\"Sparklehorse\" modifierClass=\"warning\">\n                    Sparklehorse was an American alternative rock band formed in 1995 and led by Mark Linkous (September 9, 1962 - March 6, 2010), a Richmond, Virginia native and last of a long line of southern coalminers. Linkous recorded much of Sparklehorse's material in his home studio, and his Southern Gothic vision guided Sparklehorse.\n                </callout>\n\n                <callout header=\"The Sugarcubes\" modifierClass=\"alert\">\n                    The Sugarcubes (Sykurmolarnir in Icelandic) (1986-1992) were an alternative rock group from Reykjav\u00EDk, Iceland. For most of their career, the band consisted of Bj\u00F6rk Gu\u00F0mundsd\u00F3ttir (vocals, keyboards), Einar \u00D6rn Benediktsson (vocals, trumpet), \u00DE\u00F3r Eldon (guitar), Bragi \u00D3lafsson (bass), Magga \u00D6rn\u00F3lfsd\u00F3ttir (keyboards) and Sigtryggur Baldursson (drums).\n                </callout>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <h4 class=\"subheader\">Dynamic <small>[Random attributes]</small></h4>\n                <callout *ngFor=\"let artist of artists\" header=\"{{artist.name}}\" modifierClass=\"{{artist.modifierClass}}\" [closable]=\"artist.closable\">\n                        {{ artist.bio }}\n                </callout>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ExampleCallout);
    return ExampleCallout;
}());
exports.ExampleCallout = ExampleCallout;
//# sourceMappingURL=example.callout.js.map
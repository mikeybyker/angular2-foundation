System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n        <div class=\"row\">\n            <div class=\"small-12 columns\">\n                <h3>Foundation 5 Components in Angular 2</h3>\n                <p>\n                    A Selection of <a href=\"http://foundation.zurb.com/\">Foundation</a> components made with <a href=\"https://angular.io\">Angular 2</a> (beta 13). The components can be found in the app/foundation folder.\n                <p>\n                <p>\n                    Just playing around with Angular 2 - I only needed the Tabs and Accordion, and just threw a few others in...the most simple ones :-) There will be different (better) ways to go about building these components, and certainly a more consistent approach. Things can/will break with subsequent beta releases.\n                </p>\n               \n                <p>\n                    The build/config here is taken directly from the official <a href=\"https://angular.io/docs/ts/latest/quickstart.html\">5 minute quickstart</a>.                    \n                </p>\n                <p>\n                    To get going:\n                </p>\n                <ul>\n                    <li>npm install</li>\n                    <li>npm start</li>\n                </ul>\n            </div>\n        </div>        \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
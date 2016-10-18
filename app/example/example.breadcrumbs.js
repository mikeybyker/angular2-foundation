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
var ExampleBreadcrumbs = (function () {
    function ExampleBreadcrumbs() {
        this.pages = [
            { title: 'The Cure', url: '/a' },
            { title: 'Albums', url: '/b' },
            { title: 'The Head On The Door', url: '/c', disabled: true },
            { title: 'Tracks', url: '/d' },
            { title: 'Sinking', url: '/e' }
        ];
    }
    ExampleBreadcrumbs = __decorate([
        core_1.Component({
            selector: 'foundation-breadcrumbs',
            template: "\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <h4>Breadcrumbs</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <breadcrumbs [pages]=\"pages\"></breadcrumbs>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"medium-12 large-4 columns\">\n        Pass an object containing the breadcrumb pages to the component, with the following properties:\n        <ul>\n          <li>title : The test to display</li>\n          <li>url : the url to navigate to</li>\n          <li>disabled : if this breadcrumb is disabled (optional)</li>\n        </ul>\n      </div>\n        <div class=\"medium-12 large-8 columns\">\n          eg. In template:<br>\n          <div class=\"callout\">\n            <code>\n              &lt;breadcrumbs [pages]=&quot;pages&quot;&gt;&lt;/breadcrumbs&gt;\n            </code>\n          </div>\n          In component:<br>\n          <div class=\"callout\">\n            <pre>\npages: Array&lt;any&gt; = [\n  &#123; title: &#039;The Cure&#039;, url: &#039;/a&#039; &#125;,\n  &#123; title: &#039;Albums&#039;, url: &#039;/b&#039; &#125;,\n  &#123; title: &#039;The Head On The Door&#039;, url: &#039;/c&#039;, disabled: true &#125;,\n  &#123; title: &#039;Tracks&#039;, url: &#039;/d&#039; &#125;\n  &#123; title: &#039;Sinking&#039;, url: &#039;/e&#039; &#125;\n];\n            </pre>\n          </div>\n        </div>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExampleBreadcrumbs);
    return ExampleBreadcrumbs;
}());
exports.ExampleBreadcrumbs = ExampleBreadcrumbs;
//# sourceMappingURL=example.breadcrumbs.js.map
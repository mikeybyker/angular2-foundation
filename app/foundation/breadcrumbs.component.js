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
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'breadcrumbs',
            inputs: ['pages'],
            template: "\n    <nav aria-label=\"You are here:\" role=\"navigation\">\n      <ul class=\"breadcrumbs\">\n        <li *ngFor=\"let page of pages; let last = last; let i = index;\" [class.disabled]=\"page.disabled\">\n          <span *ngIf=\"!page.disabled && last\">\n            <span class=\"show-for-sr\">Current: </span> {{page.title}}\n          </span>\n          <span *ngIf=\"!page.disabled && !last\">\n            <a [href]=\"page.url\">{{page.title}}</a>\n          </span>\n          <span *ngIf=\"page.disabled\">\n            {{page.title}}\n          </span>\n        </li>\n      </ul>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
/*

Some prefer 1st breadcrumb always clickable...
Although forcing this perhaps a misuse, or a plaster for bad data...

Can do like this: (note: as yet, there is no #first available in ngFor!)

<span *ngIf="last && i !== 0">
    <span class="show-for-sr">Current: </span> {{page.title}}
</span>
<span *ngIf="!page.disabled && (!last || i === 0)">
    <a [href]="page.url">{{page.title}}</a>
</span>
<span *ngIf="page.disabled && i !== 0">
    {{page.title}}
</span>

*/ 
//# sourceMappingURL=breadcrumbs.component.js.map
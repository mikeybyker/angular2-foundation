import {Component} from '@angular/core';
import {NgIf}      from '@angular/common';

@Component({
    selector: 'breadcrumbs',
    inputs: ['pages'],
    directives: [NgIf],
    template: `
        <nav aria-label="You are here:" role="navigation">
            <ul class="breadcrumbs">
                <li *ngFor="let page of pages; let last = last; let i = index;" [class.disabled]="page.disabled">
                    <span *ngIf="!page.disabled && last">
                        <span class="show-for-sr">Current: </span> {{page.title}}
                    </span>
                    <span *ngIf="!page.disabled && !last">
                        <a [href]="page.url">{{page.title}}</a>
                    </span>
                    <span *ngIf="page.disabled">
                        {{page.title}}
                    </span>
                </li>
            </ul>
        </nav>
    `
})

export class BreadcrumbsComponent {
    pages: Array<any>;

    ngOnInit(): void {

    }
}

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
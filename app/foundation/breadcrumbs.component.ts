import { Component }  from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  inputs: ['pages'],
  template: `
    <nav aria-label="You are here:" role="navigation">
      <ul class="breadcrumbs">
        <li *ngFor="let page of pages; let last = last; let first = first;" [class.disabled]="page.disabled">
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

/**

  Some prefer 1st breadcrumb always clickable...
  Although forcing this perhaps a misuse, or a plaster for bad data...

  Can do like this:

  <span *ngIf="last && !first">
    <span class="show-for-sr">Current: </span> {{page.title}}
  </span>
  <span *ngIf="!page.disabled && (!last || first)">
    <a [href]="page.url">{{page.title}}</a>
  </span>
  <span *ngIf="page.disabled && !first">
    {{page.title}}
  </span>

*/
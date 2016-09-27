import { Component,
         Input,
         AfterContentInit,
         QueryList,
         forwardRef,
         ContentChildren } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div class="tabs-panel" [class.is-active]="active">
      <ng-content></ng-content>
    </div>
  `
})

export class TabComponent
{
  @Input('title') title: string;
  active: boolean = false;
  name: string;
}

@Component({
  selector: 'tabset',
  template: `
    <ul class="tabs" [class.vertical]="vertical">
      <li *ngFor="let tab of tabs" class="tabs-title" [class.is-active]="tab.active" (click)="setActive(tab)">
        <a ng-href [class.is-active]="tab.active" [attr.aria-selected]="tab.active">{{tab.title}}</a>
      </li>
    </ul>
    <div class="tabs-content" [class.vertical]="vertical">
      <ng-content></ng-content>
    </div>
  `,
  providers: [QueryList]
})

export class TabsetComponent implements AfterContentInit {
  @Input() vertical: boolean;
  @ContentChildren(forwardRef(() => TabComponent)) tabs: QueryList<TabComponent>;

  constructor( tabs: QueryList<TabComponent>) {
    this.tabs = tabs;
  }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: TabComponent) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}

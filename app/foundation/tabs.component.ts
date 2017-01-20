import {
  Component,
  Input,
  AfterContentInit,
  QueryList,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div class="tabs-panel" [class.is-active]="active">
      <ng-content></ng-content>
    </div>
  `
})

export class TabComponent {
  @Input()
  title: string;
  active: boolean = false;
  name: string;
}

@Component({
  selector: 'tabset',
  template: `
    <ul class="tabs" [class.vertical]="vertical">
      <li *ngFor="let tab of tabset" class="tabs-title" [class.is-active]="tab.active" (click)="setActive(tab)">
        <a ng-href [class.is-active]="tab.active" [attr.aria-selected]="tab.active">{{tab.title}}</a>
      </li>
    </ul>
    <div class="tabs-content" [class.vertical]="vertical">
      <ng-content></ng-content>
    </div>
  `
})

export class TabsetComponent implements AfterContentInit {

  @Input()
  vertical: boolean;

  @ContentChildren(TabComponent)
  tabset: QueryList<TabComponent>;

  constructor() {
  }

  ngAfterContentInit() {
    this.tabset.first.active = true;
  }

  setActive(tab: TabComponent) {
    this.tabset.forEach(tab => {
      tab.active = false
    });
    tab.active = true;
  }
}

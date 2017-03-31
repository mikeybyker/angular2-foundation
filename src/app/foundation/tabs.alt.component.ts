import {
  Component,
  Input,
  TemplateRef,
  QueryList,
  AfterContentInit,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'tab-alt',
  template: ''
})
export class TabAltComponent {

  @Input()
  name: string;

  @Input()
  active: boolean;

  @Input()
  tabRef: TemplateRef<any>;

  constructor() { }

}

@Component({
  selector: 'tabset-alt',
  template: `
    <ul class="tabs" [ngClass]="{'vertical': vertical}" *ngIf="tab">
      <li class="tabs-title" *ngFor="let tab of tabset" [ngClass]="{'is-active': isSelected(tab)}" (click)="onTabClick(tab)">
        <a [attr.aria-selected]="isSelected(tab)">{{tab.name}}</a>
      </li>
    </ul>
    <div class="tabs-content" *ngIf="tab">
      <div class="tabs-panel is-active" aria-hidden="false">
        <ng-template [ngTemplateOutlet]="tab.tabRef"></ng-template>
      </div>
    </div>
  `
})
export class TabsetAltComponent implements AfterContentInit {

  @Input()
  vertical: boolean = false;

  @ContentChildren(TabAltComponent)
  tabset: QueryList<TabAltComponent>;
  tab: TabAltComponent;

  constructor() { }

  ngAfterContentInit() {
    const initial = this.tabset.filter(tab => tab.active);
    this.tab = initial.length ? initial[0] : this.tabset.first;
  }

  onTabClick(tab: TabAltComponent) {
    this.tab = tab;
  }

  isSelected(tab: TabAltComponent) {
    return this.tab.name === tab.name;
  }

}


/*
This way of creating the tabs, the tabs-panel will always be active if a tab exsits, so no point doing as per below:
[ngClass] = "{'is-active': tab.tabRef}"[attr.aria - hidden] = "!tab.tabRef"
*/
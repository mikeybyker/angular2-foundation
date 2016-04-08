import {Component, HostBinding, Input, AfterContentInit, Query, QueryList} from 'angular2/core';

@Component({
    selector: 'tab',
    inputs: ['title'],
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
            <li *ngFor="#tab of tabs" class="tabs-title" [class.is-active]="tab.active" (click)="setActive(tab)">
                <a ng-href [class.is-active]="tab.active" [attr.aria-selected]="tab.active">{{tab.title}}</a>                
            </li>
        </ul>
        <div class="tabs-content" [class.vertical]="vertical">
            <ng-content></ng-content>
        </div>
    `
})

export class TabsetComponent implements AfterContentInit {
    tabs: QueryList<TabComponent>;
    @Input() vertical: boolean;

    constructor( @Query(TabComponent) tabs: QueryList<TabComponent>) {
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
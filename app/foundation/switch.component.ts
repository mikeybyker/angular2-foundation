import {Component, Input} from 'angular2/core';
import {NgIf}             from 'angular2/common';

@Component({
    selector: 'check-switch',
    directives: [NgIf],
    // inputs: ['switchId', 'title', 'size', 'active', 'activeText', 'inactiveText'], // Using @Input()
    template: `
        <div class="switch" [ngClass]="size">
            <input class="switch-input" type="checkbox" id="{{id}}" name="{{id}}" value="{{value}}" [attr.checked] = "active">
            <label class="switch-paddle"  [attr.for] = "id">
                <span class="show-for-sr">{{title}}</span>
                <span *ngIf="onText" class="switch-active" aria-hidden="true" [innerHTML]="onText"></span>
                <span *ngIf="offText" class="switch-inactive" aria-hidden="true" [innerHTML]="offText"></span>
            </label>
        </div>
    `
})

export class CheckSwitchComponent {
    @Input() title: string;
    @Input('switch-id') id: string;
    @Input() value: string;
    @Input() size: string; // .tiny, .small, or .large
    @Input() active: boolean;
    @Input('active-text') onText: string;
    @Input('inactive-text') offText: string;
}

@Component({
    selector: 'radio-switch',
    directives: [NgIf],
    // inputs: ['switchId', 'title', 'value', 'group', 'active', 'activeText', 'inactiveText'], // Using @Input()
    template: `
        <div class="switch" [ngClass]="size">
            <input class="switch-input" type="radio" id="{{id}}" name="{{group}}" value="{{value}}" [attr.checked] = "active">
            <label class="switch-paddle"  [attr.for] = "id">
                <span class="show-for-sr">{{title}}</span>
                <span *ngIf="onText" class="switch-active" aria-hidden="true" [innerHTML]="onText"></span>
                <span *ngIf="offText" class="switch-inactive" aria-hidden="true" [innerHTML]="offText"></span>
            </label>
        </div>
    `
})
export class RadioSwitchComponent {
    @Input() title: string;
    @Input('switch-id') id: string;
    @Input() group: string;
    @Input() value: string;
    @Input() active: boolean;
    @Input() size: string; // .tiny, .small, or .large
    @Input('active-text') onText: string;
    @Input('inactive-text') offText: string;
}
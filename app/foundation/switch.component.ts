import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml }     from '@angular/platform-browser';
import { NgIf}             from '@angular/common';

@Component({
    selector: 'check-switch',
    template: `
        <div class="switch" [ngClass]="size">
            <input class="switch-input" type="checkbox" id="{{id}}" name="{{id}}" value="{{value}}" [attr.checked] = "active">
            <label class="switch-paddle"  [attr.for] = "id">
                <span class="show-for-sr">{{title}}</span>
                <span *ngIf="onText" class="switch-active" aria-hidden="true" [innerHTML]="htmlOn"></span>
                <span *ngIf="offText" class="switch-inactive" aria-hidden="true" [innerHTML]="htmlOff"></span>
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

    constructor(private sanitizer: DomSanitizer) {
    }

    /* Don't really do this! Unsafe. */
    public get htmlOn():SafeHtml{
      return this.sanitizer.bypassSecurityTrustHtml(this.onText);
    }
    public get htmlOff():SafeHtml{
      return this.sanitizer.bypassSecurityTrustHtml(this.offText);
    }
}

@Component({
    selector: 'radio-switch',
    template: `
        <div class="switch" [ngClass]="size">
            <input class="switch-input" type="radio" id="{{id}}" name="{{group}}" value="{{value}}" [attr.checked] = "active">
            <label class="switch-paddle"  [attr.for] = "id">
                <span class="show-for-sr">{{title}}</span>
                <span *ngIf="onText" class="switch-active" aria-hidden="true" [innerHTML]="htmlOn"></span>
                <span *ngIf="offText" class="switch-inactive" aria-hidden="true" [innerHTML]="htmlOff"></span>
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

    constructor(private sanitizer: DomSanitizer) {
    }

    /* Don't really do this! Unsafe. */
    public get htmlOn():SafeHtml{
      return this.sanitizer.bypassSecurityTrustHtml(this.onText);
    }
    public get htmlOff():SafeHtml{
      return this.sanitizer.bypassSecurityTrustHtml(this.offText);
    }

}
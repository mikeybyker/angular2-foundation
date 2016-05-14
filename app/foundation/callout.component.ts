import {Component, Input} from '@angular/core';
import {NgIf}             from '@angular/common';

@Component({
    selector: 'callout',
    inputs: ['header', 'modifierClass'],
    directives: [NgIf],
    template: `
        <div class="callout {{modifierClass}}" *ngIf="visible">
            <h5>
                {{header}}
            </h5>
            <p>
                <ng-content></ng-content>
            </p>
            <button *ngIf="closable" class="close-button" aria-label="Dismiss alert" type="button" (click)="dismiss()">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    `
})

export class CalloutComponent {

    @Input() closable: boolean;

    visible: boolean = true;

    dismiss(){
        this.visible = false;
    }
}
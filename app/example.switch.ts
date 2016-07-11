import {Component, OnInit}                           from '@angular/core';
import {CheckSwitchComponent, RadioSwitchComponent}  from './foundation/switch.component';
import {NgSwitch, NgSwitchCase}                      from '@angular/common';
import {DataService}                                 from './data/data.service';
import {Question}                                    from './data/question';

@Component({
    selector: 'foundation-switches',
    directives: [CheckSwitchComponent, RadioSwitchComponent, NgSwitch, NgSwitchCase],
    providers: [DataService],
    template: `
        <div class="row">
            <div class="small-12columns">
                <h4>Switch</h4>
            </div>
        </div>
        <div class="row">
            <div class="small-6 columns">
                <h4 class="subheader">Check Switches</h4>
                <check-switch switch-id="switch1a" title="Switch Me" value="check1a" active></check-switch>
                <check-switch switch-id="switch1b" title="Switch Me" value="check1b" size="tiny"></check-switch>
                <check-switch switch-id="switch1c" title="Switch Me" value="check1c" size="small"></check-switch>
                <check-switch switch-id="switch1d" title="Switch Me" value="check1d" size="large"></check-switch>
            </div>
            <div class="small-6 columns">
                <h4 class="subheader">Check Switches - Inner Labels</h4>
                <check-switch switch-id="switch2a" value="check2a" active-text="Yes" inactive-text="No"></check-switch>
                <check-switch switch-id="switch2b" value="check2b" active-text="Yes" inactive-text="No" size="tiny"></check-switch>
                <check-switch switch-id="switch2c" value="check2c" active-text="Yes" inactive-text="No" size="small"></check-switch>
                <check-switch switch-id="switch2d" value="check2d" active-text="Yes" inactive-text="No" size="large"></check-switch>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <h4 class="subheader">Radio Switches</h4>
            </div>
        </div>

        <div class="row">
            <div class="small-3 columns">
                <h4 class="subheader">Normal</h4>
                <radio-switch switch-id="switch3a" group="group1" value="A" title="Radio switch A" active></radio-switch>
                <radio-switch switch-id="switch3b" group="group1" value="B" title="Radio switch B"></radio-switch>
                <radio-switch switch-id="switch3c" group="group1" value="C" title="Radio switch C"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Tiny</h4>
                <radio-switch switch-id="switch4a" group="group2" value="A" title="Radio switch A" size="tiny" active></radio-switch>
                <radio-switch switch-id="switch4b" group="group2" value="B" title="Radio switch B" size="tiny"></radio-switch>
                <radio-switch switch-id="switch4c" group="group2" value="C" title="Radio switch C" size="tiny"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Small</h4>
                <radio-switch switch-id="switch5a" group="group3" value="A" title="Radio switch A" size="small" active></radio-switch>
                <radio-switch switch-id="switch5b" group="group3" value="B" title="Radio switch B" size="small"></radio-switch>
                <radio-switch switch-id="switch5c" group="group3" value="C" title="Radio switch C" size="small"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Large</h4>
                <radio-switch switch-id="switch6a" group="group4" value="A" title="Radio switch A" size="large" active></radio-switch>
                <radio-switch switch-id="switch6b" group="group4" value="B" title="Radio switch B" size="large"></radio-switch>
                <radio-switch switch-id="switch6c" group="group4" value="C" title="Radio switch C" size="large"></radio-switch>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <h4 class="subheader">Radio Switches - Inner Label</h4>
            </div>
        </div>

        <div class="row">
            <div class="small-3 columns">
                <h4 class="subheader">Normal</h4>
                <radio-switch switch-id="switch7a" group="group5" value="A" title="Radio switch A" active-text="A" inactive-text="<span style='text-decoration: line-through;'>A</span>" active></radio-switch>
                <radio-switch switch-id="switch7b" group="group5" value="B" title="Radio switch B" active-text="B" inactive-text="<span style='text-decoration: line-through;'>B</span>"></radio-switch>
                <radio-switch switch-id="switch7c" group="group5" value="C" title="Radio switch C" active-text="C" inactive-text="<span style='text-decoration: line-through;'>C</span>"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Tiny</h4>
                <radio-switch switch-id="switch8a" group="group6" value="A" title="Radio switch A" size="tiny" active-text="A" inactive-text="<span style='text-decoration: line-through;'>A</span>" active></radio-switch>
                <radio-switch switch-id="switch8b" group="group6" value="B" title="Radio switch B" size="tiny" active-text="B" inactive-text="<span style='text-decoration: line-through;'>B</span>"></radio-switch>
                <radio-switch switch-id="switch8c" group="group6" value="C" title="Radio switch C" size="tiny" active-text="C" inactive-text="<span style='text-decoration: line-through;'>C</span>"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Small</h4>
                <radio-switch switch-id="switch9a" group="group7" value="A" title="Radio switch A" size="small" active-text="A" inactive-text="<span style='text-decoration: line-through;'>A</span>" active></radio-switch>
                <radio-switch switch-id="switch9b" group="group7" value="B" title="Radio switch B" size="small" active-text="B" inactive-text="<span style='text-decoration: line-through;'>B</span>"></radio-switch>
                <radio-switch switch-id="switch9c" group="group7" value="C" title="Radio switch C" size="small" active-text="C" inactive-text="<span style='text-decoration: line-through;'>C</span>"></radio-switch>
            </div>
            <div class="small-3 columns">
                <h4 class="subheader">Large</h4>
                <radio-switch switch-id="switch10a" group="group8" value="A" title="Radio switch A" active-text="A" inactive-text="<span style='text-decoration: line-through;'>A</span>" size="large"  active></radio-switch>
                <radio-switch switch-id="switch10b" group="group8" value="B" title="Radio switch B" active-text="B" inactive-text="<span style='text-decoration: line-through;'>B</span>" size="large" ></radio-switch>
                <radio-switch switch-id="switch10c" group="group8" value="C" title="Radio switch C" active-text="C" inactive-text="<span style='text-decoration: line-through;'>C</span>" size="large" ></radio-switch>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">

                <h4 class="subheader">Dynamic Data</h4>

                <div class="row">

                    <div *ngFor="let question of questions; let i = index" class="small-6 columns">

                        <div [ngSwitch]="question.qtype">
                            <h4>{{question.title}}</h4>
                            <h5 class="subheader">[Question Type: {{question.qtype}}]</h5>
                            <div [ngSwitchCase]="'check'">
                                <div *ngFor="let response of question.responses; let j = index">
                                    <span>{{response.title}}</span><check-switch switch-id="switch{{i}}_{{j}}" title="{{response.title}}" value="{{response.value}}"></check-switch>
                                </div>
                            </div>
                            <div [ngSwitchCase]="'radio'">
                                <div *ngFor="let response of question.responses; let j = index">
                                    <span>{{response.title}}</span><radio-switch switch-id="switch{{i}}_{{j}}" group="group{{i}}" title="{{response.title}}" value="{{response.value}}"></radio-switch>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `
})

export class ExampleSwitch implements OnInit
{
    questions: Array<Question>;

    constructor(private _dataService: DataService) {

    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() {
        this._dataService.getQuestions()
            .then(questions => {
                this.questions = questions;
            });
    }
}
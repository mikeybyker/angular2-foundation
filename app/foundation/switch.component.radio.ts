import {
  Component,
  Input,
  forwardRef,
  OnInit
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

const noop = () => {
};

export const RADIO_SWITCH_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioSwitchComponent),
  multi: true
};

@Component({
  selector: 'radio-switch',
  template: `
    <div class="switch" [ngClass]="size">
      <input class="switch-input" type="radio" id="{{id}}" 
        value="{{value}}" 
        name="{{name}}" 
        (blur)="onBlur()"
        [(ngModel)]="radioValue" 
      >
      <label class="switch-paddle" [attr.for] = "id">
        <span class="show-for-sr">{{title}}</span>
        <span class="switch-active" aria-hidden="true"><ng-content select="[activeText]"></ng-content></span>
        <span class="switch-inactive" aria-hidden="true"><ng-content select="[inActiveText]"></ng-content></span>
      </label>
    </div>
    `,
  providers: [RADIO_SWITCH_VALUE_ACCESSOR]
})

export class RadioSwitchComponent implements ControlValueAccessor, OnInit {
  @Input() title: string;
  @Input('switch-id') id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() active: boolean; // when not tied to an ngModel...If it is, the data dictates what is selected
  @Input() size: string;    // .tiny, .small, or .large

  private _value: any = '';

  // Control Value Accessor will provide values for these...
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {

  }

  ngOnInit() {
    if (this.active !== undefined) {
      this.radioValue = this.value;
    }
  }

  get radioValue(): any {
    return this._value;
  };

  set radioValue(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onBlur() {
    this.onTouchedCallback();
  }

}

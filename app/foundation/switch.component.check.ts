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

export const CHECK_SWITCH_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckSwitchComponent),
  multi: true
};

@Component({
  selector: 'check-switch',
  template: `
    <div class="switch" [ngClass]="size">
      <input class="switch-input" type="checkbox" id="{{id}}" value="{{value}}" name="{{name}}" (blur)="onBlur()" [(ngModel)]="checkValue">
      <label class="switch-paddle"  [attr.for] = "id">
        <span class="show-for-sr">{{title}}</span>
        <span class="switch-active" aria-hidden="true"><ng-content select="[activeText]"></ng-content></span>
        <span class="switch-inactive" aria-hidden="true"><ng-content select="[inActiveText]"></ng-content></span>
      </label>
    </div>
  `,
  providers: [CHECK_SWITCH_VALUE_ACCESSOR]
})


export class CheckSwitchComponent implements ControlValueAccessor, OnInit {
  @Input()
  title: string;

  @Input('switch-id')
  id: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  size: string;    // .tiny, .small, or .large

  @Input()
  active: boolean;

  // Control Value Accessor will provide values for these...
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any = '';

  constructor() { }

  ngOnInit() {
    if (this.active !== undefined) {
      this.checkValue = this.value;
    }
  }

  get checkValue(): any {
    return this._value;
  };

  set checkValue(v: any) {
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

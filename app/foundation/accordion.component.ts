import {
  Component,
  Inject,
  Input,
  AfterContentInit,
  QueryList,
  Host,
  ContentChildren,
  forwardRef
} from '@angular/core';

@Component({
  selector: 'accordion',
  template: `
    <ul class="accordion">
        <ng-content></ng-content>
    </ul>
  `
})

// @todo : Animate

export class AccordionComponent {

  @ContentChildren(forwardRef(() => PanelComponent))
  panels: QueryList<PanelComponent>;

  @Input() multiExpand: boolean;
  @Input() allClosed: boolean;

  closeAll() {
    this.panels.forEach(panel => panel.active = false);
  }

  activate(panel: PanelComponent) {
    if (!panel) {
      this.closeAll();
      return;
    }
    if (this.multiExpand) {
      // Multi open version: does not close others, click === toggle
      panel.active = !panel.active;
    } else {
      // Single open version: does not toggle, always click === open
      this.closeAll();
      panel.active = true;
    }
  }

}

@Component({
  selector: 'panel',
  template: `
    <li class="accordion-item" [class.is-active]="active" (click)="clicked($event)">
        <a href="#" class="accordion-title" [attr.aria-selected]="active" >{{title}}</a>
        <div class="accordion-content" [attr.aria-hidden]="!active" [style.display]="active ? 'block' : 'none'">
            <ng-content></ng-content>
        </div>
    </li>
  `
})

export class PanelComponent implements AfterContentInit {
  @Input() title: string;
  @Input('initial') active: boolean = false;

  constructor( @Host() @Inject(forwardRef(() => AccordionComponent)) private accordion: AccordionComponent) {
  }
  ngAfterContentInit() {
    // Depends which you want to take precedence - allClosed on the accordion, or initial on the panel...
    // I picked, for no good reason, allClosed wins...
    this.active = this.accordion.allClosed ? false : this.active;
  }
  clicked(event: any) {
    event.preventDefault();
    this.accordion.activate(this);
  }
}

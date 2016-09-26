import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';
import { ExampleSwitch }       from './example.switch';
import { ExampleTabs }         from './example.tabs';
import { ExampleBreadcrumbs }  from './example.breadcrumbs';
import { ExampleAccordion }    from './example.accordion';
import { ExampleCallout }      from './example.callout';
import { FoundationModule }    from './foundation/foundation.module';
import { routing }             from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FoundationModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleSwitch,
    ExampleTabs,
    ExampleBreadcrumbs,
    ExampleAccordion,
    ExampleCallout
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

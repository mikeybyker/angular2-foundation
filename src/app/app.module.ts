import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ExampleModule } from './example/example.module';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ExampleModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

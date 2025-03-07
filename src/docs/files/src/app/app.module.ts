import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { <%= classify(library) %>Module } from '<%= dasherize(library) %>';
import { AppComponent } from './app.component';

import { Components } from './components';
import { Services } from './services';

import { environment } from '../environments/environment';

import {
  Routes,
  RouteComponents
} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    <%= classify(library) %>Module.forRoot({
      production: environment.production,
      server: environment.server,
      api: environment.api
    }),
    RouterModule.forRoot(Routes)
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

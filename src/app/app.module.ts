import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavigationComponent} from './navigation.component';
import {MemberFunctionComponent} from './memberFunction.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavigationComponent , MemberFunctionComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }

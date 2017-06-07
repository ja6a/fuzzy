import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import {ProcessMemberFunctionsComponent} from './processMemberFunctions.component';
// import {MemberFunctionComponent} from './memberFunction.component';
import {MemberFunctionService} from './memberFunction.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MemberFunctionService ]
})
export class AppModule { }

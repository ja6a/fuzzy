import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <navigation></navigation>
    <memberFunction></memberFunction>
  `
})
export class AppComponent  { name = 'Angular'; }

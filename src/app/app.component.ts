import {Component, OnInit} from '@angular/core';
import {MemberFunctionService} from './memberFunction.service';
import {MemberFunctionData} from './memberFunctionData';
import {MemberFunctionHelper} from './memberFunctionHelper';

@Component({
  selector: 'my-app',
  styleUrls: ['./styles.css'],
  template: `
    <div>
      <div *ngFor="let helper of helpers">
        <span>{{helper.name}}</span>
        <div class='memberFunction' style='position:relative;border: 2px solid gray;border-radius: 4px;cursor:pointer;'
             (click)="fuzzyClick(helper)">
          <div class='memberFunction' style='position: absolute;background-color:blue;'
               [style.left.%]="helper.fuzzy1" [style.right.%]="100-helper.fuzzy2">
          </div>
          <div class='memberFunction' style='position: absolute;background-color:red;'
               [style.left.%]="helper.core1" [style.right.%]="100-helper.core2">
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {

  helpers: MemberFunctionHelper[];
  min: number;
  max: number;

  constructor(private memberFunctionService: MemberFunctionService) {
  }

  ngOnInit(): void {
    let data = this.memberFunctionService.getMemberFunctions();
    // let data = this.memberFunctionService.getMemberFunctionsLarge();
    // let data = this.memberFunctionService.getMemberFunctionsEmpty();
    // let data = this.memberFunctionService.getMemberFunctionsBad();
    this.min = this.calculateMin(data);
    this.max = this.calculateMax(data);
    this.helpers = this.calculateHelpers(data);
  }

  //  Assume data set is ordered
  private calculateMin(data: MemberFunctionData[]): number {
    return data[0].upperStart;
  };

  //  Assume data set is ordered
  private calculateMax(data: MemberFunctionData[]): number {
    return data[data.length - 1].upperEnd;
  };

  calculateHelpers(data: MemberFunctionData[]): MemberFunctionHelper[] {
    let helpers: MemberFunctionHelper[];
    helpers = [];
    for (let datum of data) {
      let helper: MemberFunctionHelper;
      helper = new MemberFunctionHelper;
      helper.name = datum.name;
      helper.fuzzy1 = this.calculatePct(datum.upperStart);
      helper.fuzzy2 = this.calculatePct(datum.upperEnd);
      helper.core1 = this.calculatePct(datum.upperTop1);
      helper.core2 = this.calculatePct(datum.upperTop2);
      helpers.push(helper);
    }
    return helpers;
  };

  calculatePct(value: number): number {
    if (value - this.min === 0 || this.max - this.min === 0) {
      return 0;
    } else {
      return Math.floor((value - this.min) / ( this.max - this.min ) * 100);
    }
  };

  fuzzyClick(helper: MemberFunctionData): void {
    console.log('clicked ' + helper.name);
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var memberFunction_service_1 = require("./memberFunction.service");
var memberFunctionHelper_1 = require("./memberFunctionHelper");
var AppComponent = (function () {
    function AppComponent(memberFunctionService) {
        this.memberFunctionService = memberFunctionService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var data = this.memberFunctionService.getMemberFunctions();
        // let data = this.memberFunctionService.getMemberFunctionsLarge();
        // let data = this.memberFunctionService.getMemberFunctionsEmpty();
        // let data = this.memberFunctionService.getMemberFunctionsBad();
        this.min = this.calculateMin(data);
        this.max = this.calculateMax(data);
        this.helpers = this.calculateHelpers(data);
    };
    //  Assume data set is ordered
    AppComponent.prototype.calculateMin = function (data) {
        return data[0].upperStart;
    };
    ;
    //  Assume data set is ordered
    AppComponent.prototype.calculateMax = function (data) {
        return data[data.length - 1].upperEnd;
    };
    ;
    AppComponent.prototype.calculateHelpers = function (data) {
        var helpers;
        helpers = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var datum = data_1[_i];
            var helper = void 0;
            helper = new memberFunctionHelper_1.MemberFunctionHelper;
            helper.name = datum.name;
            helper.fuzzy1 = this.calculatePct(datum.upperStart);
            helper.fuzzy2 = this.calculatePct(datum.upperEnd);
            helper.core1 = this.calculatePct(datum.upperTop1);
            helper.core2 = this.calculatePct(datum.upperTop2);
            helpers.push(helper);
        }
        return helpers;
    };
    ;
    AppComponent.prototype.calculatePct = function (value) {
        if (value - this.min === 0 || this.max - this.min === 0) {
            return 0;
        }
        else {
            return Math.floor((value - this.min) / (this.max - this.min) * 100);
        }
    };
    ;
    AppComponent.prototype.fuzzyClick = function (helper) {
        console.log('clicked ' + helper.name);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./styles.css'],
        template: "\n    <div>\n      <div *ngFor=\"let helper of helpers\">\n        <span>{{helper.name}}</span>\n        <div class='memberFunction' style='position:relative;border: 2px solid gray;border-radius: 4px;cursor:pointer;'\n             (click)=\"fuzzyClick(helper)\">\n          <div class='memberFunction' style='position: absolute;background-color:blue;'\n               [style.left.%]=\"helper.fuzzy1\" [style.right.%]=\"100-helper.fuzzy2\">\n          </div>\n          <div class='memberFunction' style='position: absolute;background-color:red;'\n               [style.left.%]=\"helper.core1\" [style.right.%]=\"100-helper.core2\">\n          </div>\n        </div>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [memberFunction_service_1.MemberFunctionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
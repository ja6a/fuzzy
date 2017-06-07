"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var memberFunction_service_1 = require("./memberFunction.service");
var app_component_1 = require("./app.component");
var mock_memberFunctions_1 = require("./mock-memberFunctions");
describe('AppComponent', function () {
    var comp;
    var fixture;
    var componentMemberFunctionService; // the actually injected service
    var memberFunctionService;
    var de;
    var el;
    var memberFunctionServiceStub;
    var data = new mock_memberFunctions_1.Data;
    beforeEach(function () {
        memberFunctionServiceStub = {
            getMemberFunctions: function () {
                return mock_memberFunctions_1.MEMBER_FUNCTIONS;
            },
            getMemberFunctionsLarge: function () {
                return data.generateLarge();
            },
            getMemberFunctionsEmpty: function () {
                return [];
            },
            getMemberFunctionsBad: function () {
                return data.generateBad();
            }
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [{ provide: memberFunction_service_1.MemberFunctionService, useValue: memberFunctionServiceStub }]
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        // MemberFunctionService actually injected into the component
        memberFunctionService = fixture.debugElement.injector.get(memberFunction_service_1.MemberFunctionService);
        componentMemberFunctionService = memberFunctionService;
        // MemberFunctionService from the root injector
        memberFunctionService = testing_1.TestBed.get(memberFunction_service_1.MemberFunctionService);
        //  get the "div" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        el = de.nativeElement;
    });
    it('should show three member functions', function () {
        fixture.detectChanges();
        var content = el.textContent;
        var divs = de.children;
        expect(content).toContain('Low');
        expect(content).toContain('Medium');
        expect(content).toContain('High');
        expect(divs.length).toEqual(3);
    });
    it('min should be set', function () {
        fixture.detectChanges();
        expect(comp.min).toEqual(4000);
    });
    it('max should be set', function () {
        fixture.detectChanges();
        expect(comp.max).toEqual(200000);
    });
    it('expect member function fuzzy1 to be set', function () {
        fixture.detectChanges();
        var values;
        values = [0, 15, 31];
        var count;
        count = 0;
        for (var _i = 0, _a = comp.helpers; _i < _a.length; _i++) {
            var helper = _a[_i];
            expect(helper.fuzzy1).toEqual(values[count]);
            count++;
        }
    });
    it('expect member function fuzzy2 to be set', function () {
        fixture.detectChanges();
        var values;
        values = [25, 49, 100];
        var count;
        count = 0;
        for (var _i = 0, _a = comp.helpers; _i < _a.length; _i++) {
            var helper = _a[_i];
            expect(helper.fuzzy2).toEqual(values[count]);
            count++;
        }
    });
    it('expect core1 to be set', function () {
        fixture.detectChanges();
        var values;
        values = [0, 25, 49];
        var count;
        count = 0;
        for (var _i = 0, _a = comp.helpers; _i < _a.length; _i++) {
            var helper = _a[_i];
            expect(helper.core1).toEqual(values[count]);
            count++;
        }
    });
    it('expect core2 to be set', function () {
        fixture.detectChanges();
        var values;
        values = [15, 31, 100];
        var count;
        count = 0;
        for (var _i = 0, _a = comp.helpers; _i < _a.length; _i++) {
            var helper = _a[_i];
            expect(helper.core2).toEqual(values[count]);
            count++;
        }
    });
    it('should inject the component\'s MemberFunctionService instance', testing_1.inject([memberFunction_service_1.MemberFunctionService], function (service) {
        expect(service).toBe(componentMemberFunctionService);
    }));
    it('TestBed and Component MemberFunctionService should be the same', function () {
        expect(memberFunctionService === componentMemberFunctionService).toBe(true);
    });
    it('stub object and injected MemberFunctionService should not be the same', function () {
        expect(memberFunctionServiceStub === memberFunctionService).toBe(false);
        // Changing the stub object has no effect on the injected service
        expect(memberFunctionServiceStub.getMemberFunctions()).toBe(mock_memberFunctions_1.MEMBER_FUNCTIONS);
        expect(memberFunctionService.getMemberFunctions()).toBe(mock_memberFunctions_1.MEMBER_FUNCTIONS);
    });
    it('confirm can ingest larger data sets', function () {
        var large = memberFunctionServiceStub.getMemberFunctionsLarge();
        expect(large.length).toEqual(10);
    });
    it('confirm can ingest empty data sets', function () {
        var large = memberFunctionServiceStub.getMemberFunctionsEmpty();
        expect(large.length).toEqual(0);
        expect(comp.calculateHelpers(large).length).toEqual(0);
    });
    it('confirm can ingest bad data sets', function () {
        var bad = memberFunctionServiceStub.getMemberFunctionsBad();
        expect(comp.calculateHelpers(bad).length).toEqual(10);
    });
});
//# sourceMappingURL=app.component.spec.js.map
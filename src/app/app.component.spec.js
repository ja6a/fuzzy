"use strict";
var app_component_1 = require("./app.component");
var nav_component_1 = require("./navigation.component")
var mem_component_1 = require("./memberFunction.component")
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent,
              nav_component_1.NavigationComponent
            , mem_component_1.MemberFunctionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
});
//# sourceMappingURL=app.component.spec.js.map

"use strict";
var testing_1 = require("@angular/core/testing");
var memFunc__1 = require("./memberFunction.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('MemberFunctionComponent', function () {
  var de;
  var comp;
  var fixture;
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [memFunc__1.MemberFunctionComponent]
    })
      .compileComponents();
  }));
  beforeEach(function () {
    fixture = testing_1.TestBed.createComponent(memFunc__1.MemberFunctionComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(platform_browser_1.By.css('div'));
  });
  it ('should create component', function () { return expect(comp).toBeDefined(); });
  it('should render its HTML partial', function () {
      fixture.detectChanges();
      var h1 = de.nativeElement;
      expect(h1.innerText).toMatch(/data/i, '<div> should say something about "data"');
    });
});
//# sourceMappingURL=memberFunction.component.spec.js.map

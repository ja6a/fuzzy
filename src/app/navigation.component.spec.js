"use strict";
var testing_1 = require("@angular/core/testing");
var nav_component_1 = require("./navigation.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('NavigationComponent', function () {
  var de;
  var comp;
  var fixture;
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [nav_component_1.NavigationComponent]
    })
      .compileComponents();
  }));
  beforeEach(function () {
    fixture = testing_1.TestBed.createComponent(nav_component_1.NavigationComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(platform_browser_1.By.css('section'));
  });
  it ('should create component', function () { return expect(comp).toBeDefined(); });
  it('should render its HTML partial', function () {
      fixture.detectChanges();
      var h1 = de.nativeElement;
      expect(h1.innerText).toMatch(/seek/i, '<h1> should say something about "seek"');
    });
});
//# sourceMappingURL=navigation.component.spec.js.map

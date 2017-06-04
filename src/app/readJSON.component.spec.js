"use strict";
var testing_1 = require("@angular/core/testing");
var readJSON__1 = require("./readJSON.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('ReadJSONComponent', function () {
  var $httpBackend;
  var createController;
  var scope;
  beforeEach(testing_1.inject(function ($injector, $rootScope, $controller) {

    $httpBackend = $injector.get('httpBackend');
   // jasmine_1.loadf
 // var json= JSON.parse(jasmine_1.load getJSONFixtures().fixture"example.json"));
    var json=getJSON("example.json");
    expect(true).toEqual(true, json);
  }));

});
//# sourceMappingURL=readJSON.component.spec.js.map

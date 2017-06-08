import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {By}                                from '@angular/platform-browser';
import {DebugElement}                      from '@angular/core';

import {MemberFunctionService} from './memberFunction.service';
import {AppComponent} from './app.component';
import {MEMBER_FUNCTIONS, Data} from './mock-memberFunctions';

describe('AppComponent', function () {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let componentMemberFunctionService: MemberFunctionService; // the actually injected service
  let memberFunctionService: MemberFunctionService;

  let de: DebugElement;
  let el: HTMLElement;

  let memberFunctionServiceStub: MemberFunctionService;
  let data = new Data;

  beforeEach(() => {


    memberFunctionServiceStub = {
      getMemberFunctions() {
        return MEMBER_FUNCTIONS;
      },
      getMemberFunctionsLarge()  {
        return data.generateLarge();
      },
      getMemberFunctionsEmpty()  {
        return [];
      },
      getMemberFunctionsBad()  {
        return data.generateBad();
      }
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{provide: MemberFunctionService, useValue: memberFunctionServiceStub}]
    });


    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // MemberFunctionService actually injected into the component
    memberFunctionService = fixture.debugElement.injector.get(MemberFunctionService);
    componentMemberFunctionService = memberFunctionService;
    // MemberFunctionService from the root injector
    memberFunctionService = TestBed.get(MemberFunctionService);

    //  get the "div" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;

  });

  it('should show three member functions', () => {
    fixture.detectChanges();
    const content = el.textContent;
    const divs = de.children;
    expect(content).toContain('Low');
    expect(content).toContain('Medium');
    expect(content).toContain('High');
    expect(divs.length).toEqual(3);
  });

  it('min should be set', () => {
    fixture.detectChanges();
    expect(comp.min).toEqual(4000);
  });

  it('max should be set', () => {
    fixture.detectChanges();
    expect(comp.max).toEqual(200000);
  });

  it('expect member function fuzzy1 to be set', () => {
    fixture.detectChanges();
    let values: number[];
    values = [0, 15, 31];
    let count: number;
    count = 0;
    for (let helper of comp.helpers) {
      expect(Math.trunc(helper.fuzzy1)).toEqual(values[count]);
      count++;
    }
  });

  it('expect member function fuzzy2 to be set', () => {
    fixture.detectChanges();
    let values: number[];
    values = [25, 49, 100];
    let count: number;
    count = 0;
    for (let helper of comp.helpers) {
      expect(Math.trunc(helper.fuzzy2)).toEqual(values[count]);
      count++;
    }
  });

  it('expect core1 to be set', () => {
    fixture.detectChanges();
    let values: number[];
    values = [0, 25, 49];
    let count: number;
    count = 0;
    for (let helper of comp.helpers) {
      expect(Math.trunc(helper.core1)).toEqual(values[count]);
      count++;
    }
  });

  it('expect core2 to be set', () => {
    fixture.detectChanges();
    let values: number[];
    values = [15, 31, 100];
    let count: number;
    count = 0;
    for (let helper of comp.helpers) {
      expect(Math.trunc(helper.core2)).toEqual(values[count]);
      count++;
    }
  });

  it('should inject the component\'s MemberFunctionService instance',
    inject([MemberFunctionService], (service: MemberFunctionService) => {
      expect(service).toBe(componentMemberFunctionService);
    }));

  it('TestBed and Component MemberFunctionService should be the same', () => {
    expect(memberFunctionService === componentMemberFunctionService).toBe(true);
  });

  it('stub object and injected MemberFunctionService should not be the same', () => {
    expect(memberFunctionServiceStub === memberFunctionService).toBe(false);

    // Changing the stub object has no effect on the injected service
    expect(memberFunctionServiceStub.getMemberFunctions()).toBe(MEMBER_FUNCTIONS);
    expect(memberFunctionService.getMemberFunctions()).toBe(MEMBER_FUNCTIONS);
  });

  it('confirm can ingest larger data sets', () => {
    let large = memberFunctionServiceStub.getMemberFunctionsLarge();
    expect(large.length).toEqual(10);
  });

  it('confirm can ingest empty data sets', () => {
    let large = memberFunctionServiceStub.getMemberFunctionsEmpty();
    expect(large.length).toEqual(0);
    expect(comp.calculateHelpers(large).length).toEqual(0);
  });

  it('confirm can ingest bad data sets', () => {
    let bad = memberFunctionServiceStub.getMemberFunctionsBad();
    expect(comp.calculateHelpers(bad).length).toEqual(10);
  });
});

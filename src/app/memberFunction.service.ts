import {Injectable} from '@angular/core';
import {MEMBER_FUNCTIONS, Data} from './mock-memberFunctions';
import {MemberFunctionData} from './memberFunctionData';

@Injectable()
export class MemberFunctionService {

  getMemberFunctions(): MemberFunctionData[] {
    return MEMBER_FUNCTIONS;
  }

  getMemberFunctionsLarge(): MemberFunctionData[] {
    let data = new Data;
    let value = data.generateLarge();
    return value;
  }

  getMemberFunctionsEmpty(): MemberFunctionData[] {
    return [];
  }

  getMemberFunctionsBad(): MemberFunctionData[] {
    let data = new Data;
    let value = data.generateBad();
    return value;
  }
}

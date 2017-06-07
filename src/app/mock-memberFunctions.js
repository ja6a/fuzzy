"use strict";
var memberFunctionData_1 = require("./memberFunctionData");
exports.MEMBER_FUNCTIONS = [
    {
        'name': 'Low',
        'lowerStart': 4000.0,
        'lowerTop1': 4000.0,
        'lowerTop2': 33600.0,
        'lowerEnd': 43800.0,
        'upperStart': 4000.0,
        'upperTop1': 4000.0,
        'upperTop2': 33600.0,
        'upperEnd': 54000.0
    }, {
        'name': 'Medium',
        'lowerStart': 43800.0,
        'lowerTop1': 54000.0,
        'lowerTop2': 65000.0,
        'lowerEnd': 79000.0,
        'upperStart': 33600.0,
        'upperTop1': 54000.0,
        'upperTop2': 65000.0,
        'upperEnd': 100997.14285714287
    }, {
        'name': 'High',
        'lowerStart': 79000.0,
        'lowerTop1': 100997.14285714287,
        'lowerTop2': 200000.0,
        'lowerEnd': 200000.0,
        'upperStart': 65000.0,
        'upperTop1': 100997.14285714287,
        'upperTop2': 200000.0,
        'upperEnd': 200000.0
    }
];
var Data = (function () {
    function Data() {
    }
    Data.prototype.generateLarge = function () {
        var data;
        data = [];
        var value = 0;
        for (var i = 0; i < 10; i++) {
            var datum = new memberFunctionData_1.MemberFunctionData;
            datum.name = '' + i;
            datum.upperStart = value;
            value += 1000;
            datum.upperTop1 = value;
            value += 1000;
            datum.upperTop2 = value;
            value += 1000;
            datum.upperEnd = value;
            console.log(datum.name);
            data.push(datum);
        }
        return data;
    };
    ;
    Data.prototype.generateBad = function () {
        var data;
        data = [];
        var value = 0;
        for (var i = 0; i < 10; i++) {
            var datum = new memberFunctionData_1.MemberFunctionData;
            datum.name = '' + i;
            datum.upperStart = value;
            value -= 1000;
            datum.upperTop1 = value;
            value -= 1000;
            // datum.upperTop2 = value ;
            value -= 1000;
            datum.upperEnd = value;
            console.log(datum.name);
            data.push(datum);
        }
        return data;
    };
    ;
    return Data;
}());
exports.Data = Data;
//# sourceMappingURL=mock-memberFunctions.js.map
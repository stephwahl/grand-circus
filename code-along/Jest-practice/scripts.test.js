const add = require('./scripts');
const tempConverter = require('./tempConverter');

// suite of tests
describe("add", function() {
    test("1 + 1 = 2", function(){
        expect(add(1, 1)).toEqual(2);
    })
});

// Temp Converter

describe("tempConverter", function() {
    // enter string instead of numbers for temp
    test("enter string instead of numbers for temp", function() {
        expect(tempConverter('AA', 'F')).toBeNull();
    })

    // enter number instead of C or F for target unit
    test("enter number instead of C or F for target unit", function() {
        expect(tempConverter(14, 14)).toBeNull();
    })

    // enter letter thats not C or F for target init
    test("enter letter thats not C or F for target init", function() {
        expect(tempConverter(15, 'K')).toBeNull();
    })

    // lowercase C or F converts to uppercase
    test("lowercase C or F converts to uppercase", function() {
        expect(tempConverter(100, 'c')).toEqual('212 (F)');
    })

    // positive temp with C
    test("positive temp with C", function() {
        expect(tempConverter(20, 'F')).toEqual('68 (F)');
    })

    // positive temp with F
    test("positive temp with F", function () {
        expect(tempConverter(68, 'C')).toEqual('20 (C)');
    })

    // negative temp with C
    test("negative temp with C", function() {
        expect(tempConverter(-20, 'F')).toEqual('-4 (F)');
    })

    // negative temp with F
    test("negative temp with F", function () {
        expect(tempConverter(-4, "C")).toEqual('-20 (C)');
    })

    // 0 temp with C

    // 0 temp with F

    // null for temp

    // null for units

    // passing in more than one letter for units

    // result should always be a number

    // full name vs letter (aka Celcius instead of C)


})
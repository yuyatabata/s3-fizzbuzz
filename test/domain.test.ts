import {fizzbuzz, isFizzBuzzSetting} from '../lib/domain';

// for fizzbuzz()
describe("fizzbuzz function",()=>{

    it("returns result of fizzbuzz by setting",()=>{
        const result = fizzbuzz({
            from: 1,
            to: 15
        });
        
        expect(result).toEqual(["1","2","fizz","4","buzz","fizz","7","8","fizz","buzz","11","fizz","13","14","fizzbuzz"]);
    });

    it("assumes overwriting 'fizz' value by setting",()=>{
        const result = fizzbuzz({
            from: 1,
            to: 10,
            fizz: 2
        });

        expect(result).toEqual(["1","fizz","3","fizz","buzz","fizz","fizz","7","fizz","9","fizzbuzz"]);
    });

    it("assumes overwriting 'buzz' value by setting",()=>{
        const result = fizzbuzz({
            from: 1,
            to: 10,
            fizz: 2,
            buzz: 3,
        });

        expect(result).toEqual(["1","fizz","buzz","fizz","5","fizzbuzz","7","fizz","buzz","fizz"]);
    });

    it("throw Error if setting is invalid",()=>{
        expect(() => fizzbuzz({from:-1, to:2})).toThrow();
        expect(() => fizzbuzz({from:1.1, to:2})).toThrow();
        expect(() => fizzbuzz({from:1, to:-2})).toThrow();
        expect(() => fizzbuzz({from:1, to:2.1})).toThrow();
        expect(() => fizzbuzz({from:2, to:1})).toThrow();
        expect(() => fizzbuzz({from:1, to:10, fizz:-1})).toThrow();
        expect(() => fizzbuzz({from:1, to:10, fizz:1.1})).toThrow();
        expect(() => fizzbuzz({from:1, to:10, buzz:-1})).toThrow();
        expect(() => fizzbuzz({from:1, to:10, buzz:1.1})).toThrow();
        expect(() => fizzbuzz({from:1, to:10, fizz:2, buzz:2})).toThrow();
    });
});

// for isFizzBuzzSetting
describe("isFizzBuzzSetting", ()=>{
    it("checks if the object is FizzBuzzSetting", ()=>{
        expect(isFizzBuzzSetting({from:1, to:100})).toBe(true);
        expect(isFizzBuzzSetting({from:1, to:100, fizz:4})).toBe(true);
        expect(isFizzBuzzSetting({from:1, to:100, fizz:4, buzz:7})).toBe(true);
    })

    it("return false if argument is Invalid", ()=>{
        expect(isFizzBuzzSetting(1)).toBe(false);
        expect(isFizzBuzzSetting({})).toBe(false);
        expect(isFizzBuzzSetting({from:1})).toBe(false);
        expect(isFizzBuzzSetting({to:2})).toBe(false);
        expect(isFizzBuzzSetting({from:"a", to:3})).toBe(false);
        expect(isFizzBuzzSetting({from:1, to:"b"})).toBe(false);
        expect(isFizzBuzzSetting({from:1, to:3, fizz:"c"})).toBe(false);
        expect(isFizzBuzzSetting({from:1, to:3, fizz:2, buzz:"d"})).toBe(false);
    })
})

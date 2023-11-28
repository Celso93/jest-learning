import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {

    describe('StringUtils tests', ()=>{
        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            console.log('Setup')
        })

        afterEach(()=>{
            // clearing mocks
            console.log('Teardown')
        })

        it('Should throw error on valid argument', ()=>{
            const actual = sut.toUpperCase('Class')
            const expected = 'CLASS'

            expect(actual).toBe(expected)
        })

        it('Should throw error on invalid argument - function', ()=>{
            function expectError() {
                const actual = sut.toUpperCase('');
            }            
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');
        })

        it('Should throw error on invalid argument - arrow function', ()=>{      
            expect(() => {
                sut.toUpperCase('');
            }).toThrowError('Invalid argument!');
        })

        // it('Should throw error on invalid argument - try catch block', () => {
        // This is confusing.. this will only work with a workaround             
        //     try {
        //         sut.toUpperCase('');
        //     } catch (error) {
        //         expect(error).toBeInstanceOf(Error);
        //         expect(error).toHaveProperty('message', 'Invalid argument!');
        //     }
        // })

    });



    // it('Should return uppercase of a valid string', () => {
    //     // arrange
    //     // sut = system under test
    //     const sut = toUpperCase;
    //     const expected = 'ABC'

    //     // ACT
    //     const actual = sut('abc');
        
    //     // assert/matchers;
    //     expect(actual).toBe(expected)
    // })

    // Best pratice to run paramitezed test
    describe('toUpperCase examples', () => {
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My-String', expected: 'MY-STRING'},
            {input: 'def', expected: 'DEF'},
        ])('$input toUpperCase should be $expected', ({input, expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        })
    })

    describe('getStringInfo for arg My-String should', () => {
        // Best pratice : one test must have one expect
        test('return rigth length', () => {
            const actual = getStringInfo('My-String')
            expect(actual.characters).toHaveLength(9)
        });
        test('return rigth lower case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.lowerCase).toBe('my-string')
        });
        test('return rigth uppercase case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.upperCase).toBe('MY-STRING')
        });
        test('return rigth characters', () => {
            const actual = getStringInfo('My-String')
            expect(actual.characters).toEqual(
                expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])    
            )
        });
        test('return rigth extraInfo undefined', () => {
            const actual = getStringInfo('My-String')
            expect(actual.extraInfo).toBeDefined()
        });
    })

    // it('Should return info for valid string', () => {
    //     const actual = getStringInfo('My-String')

    //     expect(actual.lowerCase).toBe('my-string')
    //     expect(actual.extraInfo).toEqual({})

    //     expect(actual.characters.length).toBe(9)
    //     expect(actual.characters).toHaveLength(9)

    //     expect(actual.characters).toContain<string>('M')
    //     expect(actual.characters).toEqual(
    //         expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])    
    //     )

    //     expect(actual.extraInfo).not.toBe(undefined)
    //     expect(actual.extraInfo).not.toBeUndefined()
    //     expect(actual.extraInfo).toBeDefined()
    //     expect(actual.extraInfo).toBeTruthy()

    //     // primitive type = toBe
    //     // complex type
    // })

})
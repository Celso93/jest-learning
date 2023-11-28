JEST
    - Javascript/Typescript testing framework (Develop by facebook)
    - Test runner
    - Global functions (describe, test, expect)
    - Assertions (set of matchers)

Why Jest ?
    - Most popular

Struture of a properly written unit test (Universial convention)
    AAA principcles:
    -   Arrange [put what we need to do our test]
    -   Act     []
    -   Assert  []


    Setup
    Teardown

F.I.R.S.T principles
    Fast                 [Fast feedback]
    Independet/isoleted  [isolated form others test]
    Repitlable           [Same input same result][Cleaner up after test]
    Self validating      [Pass/fail]
    Thorough             [All path/case/scenarios][Very difficult]
        Happy cases, bad path, edge case;
        Large values
        100% code coverage - not a great indicator [The code runner only tracks code calls, edge cases should also be tested]

Test Properties and aliases:
    Prop:
        only        [will only run this test]
        skip        [will pass this test]
        todo        [make a skeleton of you test]
        concurrent  [this you have to check the documentation]
    aliases
        it          []
        test        [equal of it] 
        xit         [will skip the test]

watchmode   [you have to add to you command line runner --watch]

Debug
https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests

istanbul : removing a part of code to remove from code coverage
/* instabul ignore next */

Illustration
    A tester walks into a bar
        - Runs into a bar
        - Crawls into a bar
        - Dances into a bar
        - Jump into a bar
        - And orders:
            - A beer
            - 2 beers
            - 0 beers
            - 1 million bears
            -  -1 beers
            - A lizard beer
        
        Testing complete ?
    
    A real customer walks into a bar:
        Asks where the bathroom is .... System crash



Commands:
npm init -y
npm i -D typescript jest ts-jest @types/jest ts-node
npx ts-jest config:init
npm test
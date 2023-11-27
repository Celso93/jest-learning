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
        100% code coverage - not a great indicator

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
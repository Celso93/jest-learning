// Type system

let a= "Hello";
// a = 5; this will not work
let b= 5 
let c= false // infered value. Variable c took the type from the initial value false (boolean)
let d: number
d = 10

let someArray: string[] = []
someArray.push(a)
//someArray.push(b)

let notRecommend: any // not recommend. Usually highly not recomend

console.log(a)

// function

// typescript interface is your own type
interface Person {
    firstName: string,
    lastName: string
    job?: job
}

// job? means this job key is optional
type job = "Engineer" | "Programmer"

// function nameFuction(input: type): returnType { blockOfCode }
function generateEmail(input: Person): string {
    return `${input.firstName}.${input.lastName}@email.com and work as a ${input.job}`
}

let emailName = generateEmail({
    firstName: "Joao",
    lastName: "Dole",
    job: "Engineer"
})

//console.log(emailName)

// type guard = validate a data
function isPerson(potencialPerson: any): boolean {
    if ('firstName' in potencialPerson && 'lastName' in potencialPerson) {
        return true
    } else {
        return false
    }
}

function printEmailIfPerson(potencialPerson: any): void {
    if (isPerson(potencialPerson)) {
        console.log(generateEmail(potencialPerson))
    } else {
        console.log("Input is not a person")
    }
}

// let resultofthisExample = printEmailIfPerson(generateEmail)
printEmailIfPerson({firstName: 'Oslec', lastName: 'Teste'})
printEmailIfPerson({firstName: 'Oslec', lastName: 'Teste', job: "Engineer"})

// Typescript compiler
// it is complex, but you can create tsconfig.json
// tsc --init
// VScode can provide the configuration information, or you can just check the documentation


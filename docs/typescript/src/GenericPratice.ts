// Generic : Additional parameter to fuctions, interface and classes

function returnKeys<T extends Object>(arg: T){

    console.log(Object.keys(arg))
    return arg;
}

const aExample = returnKeys({
    abc: 'def'
})


interface Person<T> {
    name: string,
    age: number,
    special: T
}

const John: Person<string> = {
    special: 'This is my special property',
    name: 'John',
    age: 20
}

// Observable and Promises
class Observable <T extends Person<string>>{

    subscribe(arg: T){
        console.log(`Subscribed to ${arg.name}`)
    }
}

new Observable<typeof John>().subscribe(John)


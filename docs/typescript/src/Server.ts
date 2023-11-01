// Class helps to organize our code
// instace variable and constructor
// this keyword

// access modifier : private, protect or public
// protect can be access in another class when this is Inheritance
// A class can extend to another class (interface works the same way)

// abstract class > if you do this you cannot use this class
// This only to be extend to another class
// abstract BaseServer {
class BaseServer {

    protected port: number;
    private address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Starting serve at ${this.address}:${this.port}`)
    }

    // abstract stopServer(): void
    stopServer(): void {
        console.log("Stoping server")
    }
}

class DbServer extends BaseServer {

    constructor(port: number, address: string){
        super(port, address)
        console.log('Calling db server constructor')
    }

}

const someServer = new BaseServer(8080, 'localhost');
someServer.startServer();
// someServer.address; this is occur a error because address is private
// good pratice the instace variable to be private

const someDbServer = new DbServer(8888, 'localhost');
someDbServer.startServer();
// Class helps to organize our code
// instace variable and constructor
// this keyword
// access modifier : private, protect or public
// protect can be access in another class when this is Inheritance
// A class can extend to another class (interface works the same way)
class BaseServer {
    port;
    address;
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Starting serve at ${this.address}:${this.port}`);
    }
}
class DbServer extends BaseServer {
    //constructor(){
    //    super(123, '') // overwrite the BaseServer constructor
    //}
    constructor(port, address) {
        super(port, address);
        console.log('Calling db server constructor');
    }
}
const someServer = new BaseServer(8080, 'localhost');
someServer.startServer();
// someServer.address; this is occur a error because address is private
// good pratice the instace variable to be private
const someDbServer = new DbServer(8888, 'localhost');
someDbServer.startServer();

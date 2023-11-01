// Interface : A better way to create object on javascript
interface IServer {
    startServer(): void
    stopServer(): void
}

// When you implement, you have the obligation to create this two methods
class Server implements IServer{

    public port: number;
    public address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Starting serve at ${this.address}:${this.port}`)
    }

    stopServer(): void {
        console.log("Stoping server")
    }
}

// even if the intance variable are public, you will no be able to modify theses variable
const someServer2: IServer = new Server(8888, 'localhost');
// you only be able to see startServer() and stopServer()
someServer2.startServer();
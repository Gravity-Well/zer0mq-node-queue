const zmq = require("zeromq")
const sock = new zmq.Pull()


async function run() {

    await sock.connect("tcp://127.0.0.1:7000")
    console.log("Connected to server.")

    for await (const msg of sock) {
        console.log(`received job ${msg.toString()}`)
    }
} 

run()
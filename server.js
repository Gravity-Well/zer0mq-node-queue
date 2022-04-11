const zmq = require("zeromq")

const sock = new zmq.Push()

const run = async () => {

    await sock.bind("tcp://127.0.0.1:7000")
    console.log("Server is ready listening on port 7000")
    console.log("Press any key to start sending the messages!")
    process.stdin.once("data", send); 
}

//sending the jobs to the receivers
const send = async ()=>  {

    console.log("Sending messages")
    for (let i = 0 ;i < 1000; i ++) {
        await sock.send(`sending job ${i}`)
        //wait 50ms
        await new Promise(resolve => setTimeout(resolve, 50))
    }
    console.log("Done sending")
}

run()
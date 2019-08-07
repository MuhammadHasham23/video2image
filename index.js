const cluster = require('cluster');
let workers = [];

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  masterProcess();
} else {
  childProcess();
}
function masterProcess() {
  console.log("Master proccess initiated");

  for (let i = 0; i < numCPUs; i++) {
    console.log(`Forking process number ${i}...`);
    const worker = cluster.fork();
    workers.push(worker);

    worker.on('message', function (message) {
      console.log(`Master ${process.pid} received a message`);
    });
  }

  //Send message to the workers.
  workers.forEach(function (worker) {
    worker.send({ msg: "Message from master" });
  })
}

function childProcess() {
  console.log(`Worker ${process.pid} started`);

  process.on('message', function (message) {
    console.log(`Worker ${process.pid} recevies message '${JSON.stringify(message)}'`);
  });

  console.log(`Worker ${process.pid} sends message to master...`);
  process.send({ msg: `Message from worker ${process.pid}` });

  console.log(`Worker ${process.pid} finished`);
}


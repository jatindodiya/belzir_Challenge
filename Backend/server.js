const app = require("./app");
const cluster = require("cluster")

const PORT = process.env.PORT || 3000
const numCPUs = process.env.CLUSTERS || 1;

if(cluster.isMaster){

  console.log(`Master process ${process.id} is running.}`)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (Worker)=>{
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork();
  })

}
else{
  app.listen(PORT, ()=>{
    console.log(`Worker ${process.pid} is running on port ${PORT}`);
  })
}
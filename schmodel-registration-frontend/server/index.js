const  compression = require('compression');
const bodyParser = require( 'body-parser');
var proxy = require('http-proxy-middleware');
const path =require('path')
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
 
const  express = require('express');
const  app = express();

app.use('/api',  proxy({ws: false, target: "http://localhost:8080", pathRewrite: {"^/api" : ""}}));


app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '..', 'dist/index.html'));
});

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const server = app.listen(
    process.env.PORT || 4200,
    '0.0.0.0',
    function () {
      const address = server.address().address;
      const port = server.address().port;
      console.log('App listening at http://%s:%s', address, port);
    }
  );
}
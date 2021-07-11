const http=require('http');
const startApp=require('./start-app')
const server=http.createServer(startApp);

server.listen(3000,console.log("server is running 3000"))


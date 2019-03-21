const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults({ watch: true });

// jsonServer.defaults(  static: './client/dist/index.html');
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running...');
});

//// pagination
//// GET http://localhost:3000/events?_start=0&_end=10?q=Samnites   ?_page=7&_limit=20
////  GET /posts?q=internet

const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method} | Endpoint: ${req.url}`);
    
    const route = routes.find((routeObj) => {
        return routeObj.endpoint === req.url && routeObj.method === req.method

        // Aqui é necessário o return, pois a arrow function retorna um bínario 
    });

    if(route) {
        route.handler(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(`Cannot ${req.method} ${req.url}`)
    }
});

server.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));

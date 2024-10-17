const jsonServer = require('json-server')
const PCServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

PCServer.use(middleware)
PCServer.use(route)
PCServer.listen(PORT,()=>{
    console.log(`Easy cart started at ${PORT} and waiting for client request`);
    
})
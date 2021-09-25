 const http = require('http')

 const server = http.createServer((req, res)=>{
    //  console.log(req);
    // res.write('Welcome')
    // res.end()
    if(req.url === '/'){
        res.end('Welcome')
    }
    if(req.url === '/about'){
        res.end('About')
    }
    res.end(`<h1>404</h1><p>Not Found</p><a href="/">back home</a>`)
 })

 server.listen(5000)
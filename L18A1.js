const http = require('http');
const app = http.createServer((req,res)=>{
    res.statusCode = 404;
    res.end("<h1>Hello World</h1><li>Server Runned</li>");
})

app.listen(3200,()=>{
    console.log("Server Properly Runned");
})
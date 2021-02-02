//导入模块 相当于导包
const http = require('http');

//创建一个httpserver服务
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'})
    response.end("helloserver");
}).listen(8088);
//监听端口8088
//启动运行服务node httpserver.js
//浏览器访问

## 同源策略
协议 域名 端口 -> 同域
## 为什么浏览器不支持跨域
cookie LocolStorage
DOM元素也有同源策略 iframe
ajax 也不支持跨域
## 实现跨域
- jsonp
- cors
```javascript
// 设置是否运行客户端设置 withCredentials
// 即在不同域名下发出的请求也可以携带 cookie
res.header("Access-Control-Allow-Credentials",true)
// 第二个参数表示允许跨域的域名，* 代表所有域名(*不能和withCredentials同时使用)
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS') // 允许的 http 请求的方法
// 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
```
- postMessgae
- document.domain
- window.name
- location.hash
- http-proxy
- nginx
- websocket

www.segmentfault.com.haozi.me
白帽子讲weba安全
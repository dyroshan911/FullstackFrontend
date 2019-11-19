## cors 配置 
```bash
cnpm install egg-cors
```
------
**add plugin**
```javascript
cors: {
    enable: true,
    package: 'egg-cors',
}
```
------
**add config**
```javascript
config.security = {
    csrf: {
        enable: false, //开始时使用postman 暂时关闭
        ignoreJSON: true
    },
    domainWhiteList: [ 'http://localhost:3000' ],
}
config.cors = {
    origin: ctx => ctx.get('origin'),
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
```
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/', {  //도메인 api로 호출
      target: 'http://localhost:8000/posts', //통신할 서버의 도메인주소
      changeOrigin: true,
    })
  )
}
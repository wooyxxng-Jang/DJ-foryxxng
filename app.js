const express = require('express');
const app = express();
const port = 3000; // 서버 포트 번호

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트
app.get('/',(req, res) => {
    res.send('Hello World!');
});

// app.listen() 함수를 사용해서 서버를 실행
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있음
app.listen(port, () => {
    console.log('서버가 실행됩니다. http://localhost:$(port)');
});

// 라우트 메소드 예제 코드

// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//     console.log('Server started. port 3000.');
// });

// app.get("/customer", (req, res => {
//     res.send("get 요청에 대한 응답");
// }));

// app.post("/customer", (req, res => {
//     res.send("post 요청에 대한 응답");
// }));

// app.all("/customer", (req, res => {
//     res.send("모든 요청에 대한 응답");
// }));


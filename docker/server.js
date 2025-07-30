// [코딩애플] 도커 Docker & Container 

// 1강 - 도커가 바꾼 개발바닥
// 2강 - Docker 설치 & 이미지와 컨테이너 개념
// 3강 - Docker로 띄워볼 서버만들기
// 4강 - Dockerfile 명령어 & 이미지 만들기
// 5강 - 컨테이너 다루기
// 6강 - 성능을 위한 Dockerfile 작성법


// * express 라이브러리 설치 순서 
// 1) VSCode 터미널 실행 -> 명령어 "npm init -y" 입력 및 엔터 
// 2) 1)번 실행 후 VSCode 터미널에 명령어 "npm install express" 입력 및 엔터 
// 3) express 라이브러리 설치 완료 -> 폴더 "node_modules"에 express 라이브러리 소스코드 담겨있음.
// package.json 파일은 설치한 라이브러리를 기록하는 용도의 파일이다.

// * nodemon 라이브러리
// 특징 - 개발할 때 코드를 수정해도 바로바로 변경된 사항 반영 가능 
// 설치 순서 
// 1) VSCode 터미널 실행 -> 명령어 "npm install -g nodemon" 입력 및 엔터 
// 2) 1)번 실행 후 nodemon 라이브러리 설치 완료 -> 폴더 "node_modules"에 nodemon 라이브러리 소스코드 담겨있음.
// 서버(server.js) 실행 명령어
// nodemon server.js

// * npm으로 뭔가 입력하는게 잘 안되는 경우
// - Node.js 설치된거 지우고 최근에 나온 LTS 버전으로 다시 설치해봅시다.
// - 맥의 경우 sudo를 넣어서 sudo npm 어쩌구~ 입력해봅시다.
// - 윈도우는 허가되지 않은 스크립트 어쩌구 에러가 나면 
// 시작 - 검색 - powershell 검색 후 관리자모드로 실행해서 
// Set-ExecutionPolicy unrestricted 입력하고 터미널 껐다켜서 다시 시도해봅시다.
// - 윈도우는 onedrive 폴더 안에 코딩하면 원래 잘 안됩니다.

// * Dockerfile 이란?
// image 파일 레시피를 적는 곳이다.
// 아래 처럼 작성하고 docker build 명령어 실행하면 image 파일 생성 끝
// (예) 
// - 어떤 OS 쓸건지
// - 어떤 프로그램 설치할지
// - 어떤 터미널 명령어 실행할지   

const express = require('express');   // express 라이브러리 사용 
const app = express();   

// express 라이브러리 이용해서 localhost:8080 주소에 웹서버 띄우기
const server = app.listen(8080, () => {
  console.log('서버 실행중 http://localhost:8080');
});

// Rest API - 사용자가 메인페이지로 들어오면 '안녕' 이라는 글자 보내기
app.get('/', (req, res) => {
  res.send('안녕하쇼11111111');
}); 


// * graceful shutdown 기능

// 컨테이너 끄고 재시작하고 그런게 너무 느린경우들이 있다.
// 특히 웹서버하나 끄는데 10초넘게 걸린다면 그 이유는 서버 꺼주는 코드를 안짜서 그런 것일 뿐이다.

// ▲ 원래 docker 엔진이 컨테이너를 종료시킬 때 무슨 일이 일어나냐면
// "좋은말할 때 알아서 끄라" 이런 식으로 메세지를 컨테이너의 프로그램으로 보낸다.
// 그래서 프로그램은 그 경고성 메세지를 수신하면 알아서 종료하라고 코드짜놓으면 된다.
// 근데 종료하는 코드가 없거나 그러면 10초 정도 기다렸다가 강제로 꺼진다.
// 그래서 종료하는 코드를 좀 작성해보도록 하자.

// 그래서 웹서버에 SIGTERM 메세지가 들어오면 server.close()하라고 코드짰다.

// - express의 기본 기능인 server.close() 를 사용하면 서버에 들어온 요청을 다 처리한 후에 이쁘게 알아서 꺼진다.
// - SIGTERM은 Docker 엔진이 컨테이너 종료할 때 보내는 "좋은 말할 때 알아서 끄라" 경고메세지이다.
// - SIGINT는 유저가 터미널에서 ctrl + c 누를 때 보내지는 메세지이다.
// - 참고로 터미널에 kill 1 입력하는 것도 SIGTERM 메세지 보내는 것이다.

// 근데 나중에 서버에서 DB도 쓰고 그러면 서버를 끌 때 DB 연결 해제하는 것도 좋다.
// 이런 식으로 서버에서 끄기 전에 이거저거 챙기는걸 멋있는 말로 graceful shutdown 이라고 한다.

// 그래서 컨테이너로 돌릴 프로그램들은 자주 껐다켜지고 그럴 수 있으니까
// 컨테이너 안의 프로그램들에 graceful shutdown 잘해놨나 확인하는 것도 좋은 습관이니까 나중에 한번 챙겨보자.
process.on('SIGTERM', () => {   // 웹서버에 SIGTERM 메세지가 들어오면 
  // TODO: DB 연결 해제 코드 필요시 구현 (2025.06.30 minjae)

  server.close(() => {          // server.close() 호출하여 서버 종료 (터미널에 kill 1 입력하는 것도 SIGTERM 메세지 보내는 것이다.)
    console.log('HTTP server closed')
  })
})
process.on('SIGINT', () => {   // 웹서버에 SIGINT 메시지가 들어오면(SIGINT란? 유저가 터미널에서 ctrl + c 누를 때 보내지는 메세지)
  server.close(() => {         // server.close() 호출하여 서버 종료 
    console.log('HTTP server closed')   
  })
}) 
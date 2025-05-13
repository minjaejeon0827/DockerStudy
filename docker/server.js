// [코딩애플] 도커 Docker & Container 

// 1강 - 도커가 바꾼 개발바닥
// 2강 - Docker 설치 & 이미지와 컨테이너 개념
// 3강 - Docker로 띄워볼 서버만들기
// 4강 - Dockerfile 명령어 & 이미지 만들기
// 5강 - 컨테이너 다루기
// 6강 - 성능을 위한 Dockerfile 작성법


// express 라이브러리 설치 순서 
// 1) VSCode 터미널 실행 -> 명령어 "npm init -y" 입력 및 엔터 
// 2) 1)번 실행 후 VSCode 터미널에 명령어 "npm install express" 입력 및 엔터 
// 3) express 라이브러리 설치 완료 -> 폴더 "node_modules"에 express 라이브러리 소스코드 담겨있음.
// package.json 파일은 설치한 라이브러리를 기록하는 용도의 파일이다.

// nodemon 라이브러리
// 특징 - 개발할 때 코드를 수정해도 바로바로 변경된 사항 반영 가능 
// 설치 순서 
// 1) VSCode 터미널 실행 -> 명령어 "npm install -g nodemon" 입력 및 엔터 
// 2) 1)번 실행 후 nodemon 라이브러리 설치 완료 -> 폴더 "node_modules"에 nodemon 라이브러리 소스코드 담겨있음.
// 서버(server.js) 실행 명령어
// nodemon server.js

// npm으로 뭔가 입력하는게 잘 안되는 경우

// - Node.js 설치된거 지우고 최근에 나온 LTS 버전으로 다시 설치해봅시다.
// - 맥의 경우 sudo를 넣어서 sudo npm 어쩌구~ 입력해봅시다.
// - 윈도우는 허가되지 않은 스크립트 어쩌구 에러가 나면 
// 시작 - 검색 - powershell 검색 후 관리자모드로 실행해서 
// Set-ExecutionPolicy unrestricted 입력하고 터미널 껐다켜서 다시 시도해봅시다.
// - 윈도우는 onedrive 폴더 안에 코딩하면 원래 잘 안됩니다.

// Dockerfile 이란?
// image 파일 레시피를 적는 곳이다.
// 아래 처럼 작성하고 docker build 명령어 실행하면 image 파일 생성 끝
// (예) 
// - 어떤 OS 쓸건지
// - 어떤 프로그램 설치할지
// - 어떤 터미널 명령어 실행할지   

const express = require('express');   // express 라이브러리 사용 
const app = express();   

// express 라이브러리 이용해서 localhost:8080 주소에 웹서버 띄우기
app.listen(8080, () => {
  console.log('서버 실행중 http://localhost:8080');
});

// Rest API - 사용자가 메인페이지로 들어오면 '안녕' 이라는 글자 보내기
app.get('/', (req, res) => {
  res.send('안녕');
}); 
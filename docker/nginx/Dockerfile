# 터미널에서 nginx라는 이름으로 이미지 빌드 명령어
# 해당 Dockerfile 경로는 nginx 폴더 아래에 있으므로 아래 명령어 오른쪽 끝에 ./nginx 추가 필수 
# docker build -t nginx:1 ./nginx

# nginx 이미지 빌드 완료 후 -> Docker Desktop 응용 프로그램 시작 -> 왼쪽 리본 버튼 "Images" 클릭 -> "Images" 화면에 출력된 "nginx" 이미지 오른쪽 재생버튼(Run) 클릭
# -> 팝업화면 "Run a new container" 출력 -> 항목 Ports 아래 Host port 입력란에 "80" 입력 -> 버튼 "Run" 클릭
# -> nginx 정상 실행 

# 주의사항 
# 1. Docker Desktop 응용 프로그램에서 nginx 이미지 실행시 아래와 같은 오류 메시지 출력되면 
#    Dockerfile 실행 명령어 중 맨 마지막 명령어 단계인 4. nginx 명령어 실행을 아래처럼 세미콜론(;) 추가 필수 
# (기존) CMD ["nginx", "-g", "daemon off"] -> (변경) CMD ["nginx", "-g", "daemon off;"]
# 오류 메시지
# 2025/05/22 00:10:05 [emerg] 1#1: unexpected end of parameter, expecting ";" in command line
# nginx: [emerg] unexpected end of parameter, expecting ";" in command line

# 2. Docker Desktop 응용 프로그램에서 nginx 이미지 실행시 구글 크롬(Chrome) 웹브라우저에 URL 주소 "http://localhost/"는 "http://localhost:80/"과 같은 의미이다.

# 1. nginx 설치 - Docker Desktop 응용 프로그램 시작 -> DockerHub "nginx" 검색 -> "nginx" 버전 검색 (예) 1.27.2-alpine
FROM nginx:1.27.2-alpine

# 2. nginx 설정파일 작성(옮기기)
# 현재 폴더 경로 설정 파일(./myconfig1.conf) -> 리눅스 폴더 경로 설정 파일(/etc/nginx/conf.d/myconfig1.conf) 옮기기
COPY ./myconfig1.conf /etc/nginx/conf.d/myconfig1.conf

# 3. nginx 기본 설정 파일(default.conf) 삭제
RUN rm /etc/nginx/conf.d/default.conf  

# 80번 포트 오픈
EXPOSE 80

# 4. nginx 명령어 실행
# CMD ["nginx", "-g", "daemon off"]
CMD ["nginx", "-g", "daemon off;"]


# Docker 명령어 예제
# (Dockerfile)

# FROM nginx:latest

# COPY ./myconfig1.conf /etc/nginx/conf.d/myconfig1.conf
# RUN rm /etc/nginx/conf.d/default.conf  # nginx 기본 설정 파일(default.conf) 삭제

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off"]   # nginx 실행 명령어 

# 터미널에서 nginx라는 이름으로 이미지 빌드 명령어
# docker build -t nginx:1 . 
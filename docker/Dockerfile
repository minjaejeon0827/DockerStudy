FROM node:20-slim
# /app 폴더 이동 (cd 명령어랑 비슷)
WORKDIR /app 
COPY . .
# bin/sh -c npm install 실행됨.
# RUN npm install 
# 기본적으로 아래처럼 대괄호(["npm", "install"]) 사용하는게 안정적이다.
RUN ["npm", "install"]
EXPOSE 8080
CMD ["node", "server.js"]

# 터미널창 Docker Build 명령어
# 아래 명령어에서 마침표(.)는 Dockerfile 경로 의미 (D:\minjae\DockerStudy\docker 폴더 하단에 존재하는 Dockerfile 의미함.)
# docker build -t nodeserver:1 .

# Docker 명령어 예제 1
# FROM python:3.11-slim

# RUN apt-get update && apt-get install -y

# RUN pip install numpy
# RUN pip install pandas

# Docker 명령어 예제 2
# FROM nginx:1.27.2-alpine

# COPY ./myconfig1.conf /etc/nginx/conf.d/myconfig1.conf
# RUN rm /etc/nginx/conf.d/default.conf
# EXPOSE 80

# CMD ["npm", "install", "-g"]

# (Dockerfile)

# FROM node:20-slim
# WORKDIR /app
# COPY . .
# RUN ["npm", "install"]
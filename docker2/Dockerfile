# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

# ARG NODE_VERSION=20-slim

# FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
# ENV NODE_ENV production

FROM node:20-slim
# 현재 작업경로를 /app 폴더로 바꿔주고(이동해주고)(cd 명령어랑 비슷함.) /app 폴더가 없으면 하나 만들어준다.
WORKDIR /app
# COPY 명령어 왼쪽(.)에는 내컴퓨터 폴더경로, 오른쪽(.)에는 이미지 어디로 옮길건지(/app 폴더) 정하면 된다.
COPY . .
# RUN 명령어 사용하여 npm install을 터미널에서 입력하면 package.json에 기재된 라이브러리가 설치된다.
RUN ["npm", "install"]
# 8080 포트를 열어서 쓰겠다고 메모하는 용도 (나중에 이미지 실행할 때 힌트제공용임)
EXPOSE 8080  

# 마지막으로 CMD 명령어 사용하여 node server.js 입력하면 파일이 실행되고 그러면 웹서버가 실행
CMD ["node", "server.js"]

# 이미지 만들려면 아래처럼 docker build 명령어 사용 
# docker build -t 이미지이름:태그 .  

# 이미지 실행하려면 아래처럼 docker run 명령어 사용
# 누가 내 컴퓨터 8080번 포트로 들어오면 가상 컴퓨터의 8080번 포트로 연결하라는 뜻
# 아래 명령어 실행 후 웹브라우저 켜서 localhost:8080으로 들어가보면 웹서버가 실행됨.
# (참고) localhost가 뭐냐면 내 컴퓨터로 접속하라는 뜻이다. 
# (참고) 실은 docker init 명령어 입력하면 Dockerfile을 약간 자동완성 해주기 때문에
# 거기서 필요한거 수정해서 쓰는 방법도 좋다.
# docker run -p 8080:8080 이미지명:태그명


# WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev

# Run the application as a non-root user.
# USER node

# Copy the rest of the source files into the image.
# COPY . .

# Expose the port that the application listens on.
# EXPOSE 8080

# Run the application.
# CMD CMD ["node", "server.js"]

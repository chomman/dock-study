
![Docker](https://www.macupdate.com/images/icons256/57761.png)

## 도커란?

컨테이너 기반의 가상화 플랫폼

----

### 기존 가상머신과 차이

![도표](https://qph.fs.quoracdn.net/main-qimg-0c28ac02db0688c430322f329f05d64b)

----

- 기존의 가상머신과 다르게 process를 격리하는 방식
- 컴퓨팅 자원의 성능손실 거의 없음
- 컨테이너 생성 및 실행 속도가 빠르다

----

### 도커 이미지(Image)란?

컨테이너의 스냅샷

![도커 레이어](https://www.ontrack.com/blog/wp-content/uploads/sites/7/docker.png)

---

## 도커 설치

[다운로드: https://www.docker.com/get-started](https://www.docker.com/get-started)

----

### 도커 버전 확인

```
$ docker version
```
----

### 도커 클라이언트와 서버

![도커 아키텍처](https://www.researchgate.net/profile/Yahya_Al-Dhuraibi/publication/308050257/figure/fig1/AS:433709594746881@1480415833510/High-level-overview-of-Docker-architecture.jpg)

----

### 도커 이미지 다운로드

[Docker Hub: https://hub.docker.com/](https://hub.docker.com/)

```
$ docker pull [Image]:[Version]

$ docker pull ubuntu

$ docker pull ubuntu:14.04

$ docker run ubuntu

$ docker run ubuntu:LATEST

```
----

### 도커 컨테이너 실행

```
$ docker run -it ubuntu:16.04 /bin/bash
```

- ```run```: 해당 이미지로 컨테이너 생성 및 실행.
- `-i` 옵션: Interactive
- `-t` 옵션: 터미널 입력기

----

### 컨테이너 및 이미지 삭제

```
$ docker ps -a  // 컨테이너 프로세스 확인

$ docker rm [CONTAINER ID] // 컨테이너 삭제

$ docker rmi [IMAGE ID] // 이미지 삭제
```

#### 정지된 컨테이너 모두 삭제
```
$ docker rm $(docker ps -q -f status=exited)
```

---

## 도커 사용 예제 1

버전 별 `Mysql` 사용하기

----

```
$ docker run -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql:5.6

$ docker run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql:5.7
```

---

## 도커 사용 예제 2

`Docker Compose` 활용하기

(`Spring Boot` + `Nginx` + `Mysql`)

----

```
springboot-mysql-nginx$ docker-compose up -d

springboot-mysql-nginx$ docker-compose ps

springboot-mysql-nginx$ docker-compose down
```

---

## 도커 사용 예제 3

`Dockerfile` 만들기

(Vue.js + Webpack)

----

### Dockerfile 예시

```
FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /data/

EXPOSE 3000

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]
```

----

### Dockerfile 빌드

```
$ docker build [옵션] PATH

$ docker build -t study/vue-client .

$ docker images

$ docker run --name study.docker-test.vue-client -p 3000:3000 -v ~/{your_path}/docker-study/vue-client:/data study/vue-client
```

---

# The End.

# 초기 세팅

# 1. npm init -y > package.json 생성됨

## 1.1. package.json > "main": "server.js" : 기존에 index.js 인 것을 server.js로 변경

## 1.2. package.json > "main": "type": "module", 작성

# 2. .gitignore 생성 후 github repository와 연동

# 3. prettier 생성

# 4. server.js 생성 및 작성 : server 만들고 실행시키기

=======================================================================================================

# 1. TOTAL_LENGTH_SIZE 의 의미 : header와 payload의 크기

## ex

## > header : TOTAL_LENGTH_SIZE + HANDLER_ID

## > payload : "hello world"

## > payload의 길이 + HANDLER_ID의 길이 = TOTAL_LENGTH_SIZE

# 2. src/init 폴더 : 서버가 실행을 시작할때 혹은 시작하기 전에 읽어들어거나 실행시켜야할 것들을 작성한 코드 모음

# 3. src/init/assets 폴더 : 데이터 테이블 관련 내용

# 4. src/events 폴더 : client <-> server 간 교환한 packet을 읽는 함수

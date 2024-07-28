# 초기 세팅

# 1. npm init -y > package.json 생성됨

> 1.1. package.json > "main": "server.js" : 기존에 index.js 인 것을 server.js로 변경
> 1.2. package.json > "main": "type": "module", 작성

# 2. .gitignore 생성 후 github repository와 연동

# 3. prettier 생성

# 4. server.js 생성 및 작성 : server 만들고 실행시키기

=======================================================================================================

# 1. TOTAL_LENGTH_SIZE 의 의미 : header와 payload의 크기

> 예시
> header : TOTAL_LENGTH_SIZE + HANDLER_ID
> payload : "hello world"
> payload의 길이 + HANDLER_ID의 길이 = TOTAL_LENGTH_SIZE

# 2. src/init 폴더 : 서버가 실행을 시작할때 혹은 시작하기 전에 읽어들어거나 실행시켜야할 것들을 작성한 코드 모음

# 3. src/init/assets 폴더 : 데이터 테이블 관련 내용

# 4. src/events 폴더 : client <-> server 간 교환한 packet을 읽는 함수

# 5. src/protobuf 폴더 : 서버가 실행을 시작하기 전에 protobuf 파일을 미리 읽어서 서버 메모리에 저장해놓고 패킷이 왔을 때 적절한 protobuf 파일을 실행하여 passing

> src/init/loadProto.js 를 통해서 proto 파일들(common.proto, response.proto)을 로드(: 읽어서 사용가능한 상태로 만든다)한다.

# 6. packet parsing : 네트워크 통신에서 데이터를 읽고 해석하는 과정 > onData.js에서 실행

> 네트워크는 데이터를 작은 조각(패킷)으로 나눠서 전송하는데, Packet Parsing은 이러한 패킷이 담고 있는 정보를 추출하고 이해하는 과정

> packet Parsing 과정
> 6.1 packet 수신 : 네트워크 인터페이스를 통해 패킷을 수신
> 6.2 header 분석 : 패킷의 해더를 분석하여 출발지와 목적지 주소, 프로토콜 유형 등을 확인
> 6.3 payload 추출 : header 정보를 바탕으로 packet의 payload를 추출
> 6.4 데이터 처리 : 추출된 데이터를 응용 프로그램에서 사용하거나 추가적인 처리를 위해 전달

# 7. session : 유저 정보를 server memory인 session에 저장

# 8. handler : 유저 정보에서 필요한 정보를 가지고 와서 이용하는 용도(: 이용한다 = 저장, 변환, 재반환, 등등)

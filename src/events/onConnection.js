import { onData } from './onData.js';
import { onEnd } from './onEnd.js';
import { onError } from './onError.js';

export const onConnection = (socket) => {
  console.log(
    `server.js > onConnection.js: Client connected from: ${socket.remoteAddress}: ${socket.remotePort}`,
  );

  // 1. client > server로 오는 protobuf 바이트 분해배열
  // 소켓 객체에 buffer 속성을 추가하여 각 클라이언트에 고유한 버퍼를 유지
  socket.buffer = Buffer.alloc(0);
  socket.on('data', onData(socket));
  socket.on('end', onEnd(socket));
  socket.on('error', onError(socket));
};

/*

1. client > server로 오는 protobuf 바이트 분해배열
  - 각 클라이언트마다 고유한 버퍼를 유지하기 위해 빈 버퍼를 생성(: socket.buffer)
  - 서버가 처음 열렸을 때만 실행함

*/

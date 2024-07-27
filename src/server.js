import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';

// 포트 지정
const PORT = 5555;

// 서버 생성
const server = net.createServer((socket) => {
  console.log(`Client connected from: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(`server.js : `, data);
  });

  socket.on('end', () => {
    console.log('server.js : Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('server.js : Socket error:', err);
  });
});

// initServer 함수가 먼저 실행되고 서버가 실행
initServer()
  .then(() => {
    // 서버 실행
    server.listen(config.server.port, config.server.host, () => {
      console.log(
        `server.js : server listening on port / PORT: ${config.server.port}, HOST: ${config.server.host}`,
      );
      console.log(`server.js : `, server.address());
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

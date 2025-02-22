import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';
import { onConnection } from './events/onConnection.js';

// 서버 생성
const server = net.createServer(onConnection);

// initServer 함수가 먼저 실행되고 서버가 실행
initServer()
  .then(() => {
    // 서버 실행
    server.listen(config.server.port, config.server.host, () => {
      console.log(
        `server.js : server listening on port / PORT: ${config.server.port}, HOST: ${config.server.host}`,
      );
      console.log(`server.js :`, server.address());
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // 오류 발생 시 프로세스 종료
  });

import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';
import { onConnection } from './events/onConnection.js';
import { getAllGameSessions } from './session/game.session.js';
import { userSessions } from './session/sessions.js';

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
      if (getAllGameSessions().length) {
        console.log('게임 생성 완료');
        console.log(getAllGameSessions());
        console.log(userSessions);
      } else {
        console.log('게임 생성 안됐어요');
      }
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // 오류 발생 시 프로세스 종료
  });

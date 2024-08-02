import { getGameSession } from '../../session/game.session.js';
import { getUserById } from '../../session/user.session.js';
import CustomError from '../../utils/error/customError.js';
import { ErrorCodes } from '../../utils/error/errorCodes.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { createLocationPacket } from '../../utils/notification/game.notification.js';

const locationUpdateHandler = ({ socket, userId, payload }) => {
  try {
    const { x, y } = payload;
    const gameSession = getGameSession(1);

    // 검증
    const user = getUserById(userId);
    console.log(`locationUpdate.Handler.js > user: ${user}`);
    // 회원가입한 유저인지 확인
    if (!user) {
      throw new CustomError(ErrorCodes.USER_NOT_FOUND, '유저가 존재하지 않습니다.');
    }

    const existConnectedUser = gameSession.getUser(user.Id);
    // 게임에 접속한 유저인지 확인
    if (!existConnectedUser) {
      throw new CustomError(ErrorCodes.USER_NOT_FOUND, '유저가 존재하지 않습니다.');
    }
    if (!existUser) {
      gameSession.addUser(user);
    }

    // 2. 유저 정보 업데이트 - 변경 내용: x, y
    user.updatePosition(x, y);

    // 3. 본인 정보를 제외한 모든 유저 정보
    const allUserData = getAllUserLocations(userId);

    // 5. 유저에게 다른 유저의 위치정보 동기화 데이터 보내기
    const packet = gameSession.getUserLocationsExceptMe(userId);
    socket.write(packet);
    console.log(`locationUpdate.handler.js`);
  } catch (error) {
    handleError(socket, error);
  }
};

export default locationUpdateHandler;

// 가장 최초에 접속을 했을 때 유저 정보를 처리하는 곳

import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handleError } from '../../utils/error/errorHandler.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId } = payload;

    addUser(socket, deviceId);

    // 유저 정보 응답 생성
    const initialResponse = createResponse(
      HANDLER_IDS.INITIAL,
      RESPONSE_SUCCESS_CODE,
      { userId: deviceId },
      deviceId,
    );

    // 소켓을 통해 클라이언트에게 응답 메시지 전송
    socket.write(initialResponse);
  } catch (err) {
    handleError(socket, err);
  }
};

export default initialHandler;

import { createResponse } from '../response/createResponse.js';
import { ErrorCodes } from './errorCodes.js';
// 1.
export const handleError = (socket, error) => {
  let responseCode;
  let message;

  // 내부 개발자 확인용
  console.log(error);

  if (error.code) {
    responseCode = error.code;
    message = error.message;
    console.error(
      `errorHandler.js: (지정한 에러코드가 있는 경우) 에러 코드: ${error.code}, 메시지: ${error.message}`,
    );
  } else {
    responseCode = ErrorCodes.SOCKET_ERROR; // responseCode = 10000
    message = error.message;
    console.error(`errorHandler.js: (지정한 에러코드가 없는 경우)일반 에러: ${error.message}`);
  }

  const errorResponse = createResponse(-1, responseCode, { message }, null);
  socket.write(errorResponse);
};
/*
1. handler 내에서 err가 발생했을 때 
try-catch 구문으로 err를 넘겨받아서 
client에게 socket으로 메세지를 보내는 것것
*/

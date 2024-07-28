// 핸들러 맵핑하는 곳

import { HANDLER_IDS } from '../constants/handlerIds.js';
import initialHandler from './user/initial.handler.js';
import CustomError from '../utils/error/customError.js';
import { ErrorCodes } from '../utils/error/errorCodes.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    handler: initialHandler,
    protoType: 'initial.InitialPacket', // 1.
  },
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    throw new CustomError(
      `handlers/index.js : 핸들러를 찾을 수 없습니다: ID ${handlerId}`,
      ErrorCodes.UNKNOWN_HANDLER_ID,
    );
  }
  return handlers[handlerId].handler;
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) {
    // packetParser 체크하고 있지만 그냥 추가합니다.
    throw new CustomError(
      `index.js : 프로토타입을 찾을 수 없습니다: ID ${handlerId}`,
      ErrorCodes.UNKNOWN_HANDLER_ID,
    );
  }
  return handlers[handlerId].protoType;
};

/*
1. handler마다 payload가 다름
  > prototype: payload에 구성되어 있는 protobuf 구조체의 이름or message의 이름 
*/

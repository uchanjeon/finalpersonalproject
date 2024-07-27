/* 중앙 집중식 관리 : 모든 환경변수를 선언해서 사용하는 방식
    >>> constants 파일에 있는 변수들을 사용할 때는 반드시 config 함수를 통해서 사용하도록 하는 방식
*/

import { CLIENT_VERSION, HOST, PORT } from '../constants/env.js';
import { PACKET_TYPE_LENGTH, TOTAL_LENGTH } from '../constants/header.js';

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },

  client: {
    version: CLIENT_VERSION,
  },

  packet: {
    totalLength: TOTAL_LENGTH,
    packetTypeLength: PACKET_TYPE_LENGTH,
  },
};

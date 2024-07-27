import { config } from '../config/config.js';
import { TOTAL_LENGTH } from '../constants/header.js';

export const onData = (socket) => async (data) => {
  // 기존 버퍼(: socket.buffer)에 새로 수신된 데이터(: data: 청크: buffer를 작은 크기로 쪼개놓은 data)를 추가
  socket.buffer = Buffer.concat([socket.buffer, data]);

  // 패킷의 총 헤더 길이 (패킷 길이 정보 + 타입 정보)
  const totalHeaderLength = config.packet.totalLength + config.packet.typeLength;

  // 버퍼에 최소한 전체 헤더가 있을 때만 패킷을 처리
  while (socket.buffer.length >= totalHeaderLength) {
    // 1. 패킷 길이 정보 수신 (4바이트)
    const length = socket.buffer.readUInt32BE(0);

    // 2. 패킷 타입 정보 수신 (1바이트)
    const packetType = socket.buffer.readUInt8(TOTAL_LENGTH);
    // 3. 패킷 전체 길이 확인 후 데이터 수신
    if (socket.buffer.length >= length) {
      // 패킷 데이터를 자르고 버퍼에서 제거
      const packet = socket.buffer.slice(totalHeaderLength, length);
      socket.buffer = socket.buffer.slice(length);

      console.log(`length: ${length}`);
      console.log(`packetType: ${packetType}`);
      console.log(packet);
    } else {
      // 아직 전체 패킷이 도착하지 않음
      break;
    }
  }
};

/*

1. 패킷 길이 정보 수신 (4바이트)
  : index = 0(: (0)) 부터 4바이트까지(: readUInt32BE) 짤라서 length에 저장

2. 패킷 타입 정보 수신 (1바이트)
  : index = 4(: config.packet.totalLength = 'TOTAL_LENGTH = 4') 부터 1바이트까지(: readUInt8) 짤라서 packetType에 저장

3. 패킷 전체 길이 확인 후 데이터 수신
  : 청크가 모두 도착해서 패킷이 완성되었다면 데이터를 해석한다.
  : 다른 패킷의 청크가 있다면 socket.buffer에 다시 담는다.
  
*/

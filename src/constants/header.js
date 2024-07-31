// 패킷 타입 형태와 관련된 상수를 이용할 때 쓰는 변수 정의

export const TOTAL_LENGTH = 4; // 전체 길이를 나타내는 4바이트
export const PACKET_TYPE_LENGTH = 1; // 패킷타입을 나타내는 1바이트 // 0 = 핑, 1 = 일반 패킷

export const PACKET_TYPE = {
  NORMAL: 1,
  LOCATION: 3,
};

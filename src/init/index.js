// assets.js 파일에서 loadGameAssets을 실행시키는 곳
// 서버가 켜지기 전에 파일을 읽도록 함

import { loadGameAssets } from './assets.js';

const initServer = async () => {
  try {
    await loadGameAssets();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default initServer;

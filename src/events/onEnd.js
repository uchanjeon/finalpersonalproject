import { removeUser } from '../session/user.session.js';

export const onEnd = (socket) => () => {
  console.log('server.js > onConnection.js > onEnd.js : Client disconnected');
  removeUser(socket);
};

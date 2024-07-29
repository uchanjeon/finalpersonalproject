export const packetNames = {
  common: {
    Packet: 'common.Packet',
    Ping: 'common.Ping',
  },
  initial: {
    InitialPacket: 'initial.InitialPacket',
  },
  game: {
    CreateGamePayload: 'game.CreateGamePayload',
    JoinGamePayload: 'game.JoinGamePayload',
    UpdateLocationPayload: 'game.UpdateLocationPayload',
  },
  response: {
    Response: 'response.Response',
  },
  gameNotification: {
    UpdateLocation: 'gameNotification.UpdateLocation',
    Start: 'gameNotification.Start',
  },
};

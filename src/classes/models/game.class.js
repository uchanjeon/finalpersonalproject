const MAX_PLAYERS = 100;

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.state = 'waiting'; // 'waiting', 'inProgress'
  }

  addUser(user) {
    if (this.users.length >= MAX_PLAYERS) {
      throw new Error('Game session is full');
    }
    this.users.push(user);
    this.startGame();
  }

  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);

    if (this.users.length < MAX_PLAYERS) {
      this.state = 'waiting';
    }
  }

  getUserLocationsExceptMe(userId) {
    const allUserData = this.users.map((user) => {
      return {
        id: user.Id,
        playerId: user.playerId,
        x: user.x,
        y: user.y,
      };
    });

    const locationExceptMe = allUserData.filter((user) => user.id !== userId);
    return createLocationPacket(locationExceptMe);
  }

  startGame() {
    this.state = 'inProgress';
  }
}

export default Game;

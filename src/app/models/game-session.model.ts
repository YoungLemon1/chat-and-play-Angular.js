import { CreateUUID } from '../utils';
class GameSession {
  public id:string;
  constructor(
    public gameId: number,
    public player1: string,
    public player2: string
  ) {
    this.id = CreateUUID();
  }
}
export default GameSession;

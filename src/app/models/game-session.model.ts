class GameSession {
  constructor(
    private sessionId:string,
    public gameId: number,
    public player1: string,
    public player2: string,
    public isPlayer1Ready: boolean,
    public isPlayer2Ready: boolean
  ) {}
}
export default GameSession;
